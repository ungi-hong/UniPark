#!/usr/bin/env python3
"""Safely coordinate parallel municipality research and serialized dataset merges."""

from __future__ import annotations

import argparse
import datetime as dt
import fcntl
import json
import os
import re
import shutil
import sys
import tempfile
import uuid
from contextlib import contextmanager
from pathlib import Path
from typing import Any


DEFAULT_REPO = Path.cwd()
CHECKLIST_NAME = "FACILITY-DATA.md"
DATA_NAME = "apps/web/data/facility-research.json"
WORK_NAME = ".facility-research-work"
LINE_RE = re.compile(r"^(?P<prefix>\s*- \[)(?P<status>[ x~])(?P<suffix>\]\s+(?P<code>\d{5})\s+(?P<name>.+?)\s*)$")
ID_RE = re.compile(r"^(?P<code>\d{5})-(?P<sequence>\d{3,})$")

REQUIRED_FIELDS = {
    "municipality_code",
    "municipality",
    "name",
    "category",
    "discount_status",
    "accessibility_review_status",
    "source_url",
    "verified_at",
}
CATEGORIES = {
    "museum", "gallery", "zoo", "aquarium", "garden", "park", "sports",
    "pool", "theater", "cinema", "planetarium", "community", "leisure", "other",
}
DISCOUNT_STATUSES = {"available", "historical", "none", "not_applicable", "unverified"}
DISCOUNT_SCOPES = {None, "free", "partial", "conditional"}
ACCESS_STATUSES = {"verified", "partial", "unverified"}
FEATURE_STATUSES = {"available", "conditional", "unavailable"}


def now_jst() -> dt.datetime:
    return dt.datetime.now(dt.timezone(dt.timedelta(hours=9)))


def iso_now() -> str:
    return now_jst().isoformat(timespec="seconds")


def atomic_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, temp_name = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as handle:
            handle.write(content)
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(temp_name, path)
    finally:
        if os.path.exists(temp_name):
            os.unlink(temp_name)


def atomic_json(path: Path, value: Any) -> None:
    atomic_text(path, json.dumps(value, ensure_ascii=False, indent=2) + "\n")


@contextmanager
def exclusive_lock(work_dir: Path):
    work_dir.mkdir(parents=True, exist_ok=True)
    lock_path = work_dir / "merge.lock"
    with lock_path.open("a+", encoding="utf-8") as handle:
        fcntl.flock(handle.fileno(), fcntl.LOCK_EX)
        try:
            yield
        finally:
            fcntl.flock(handle.fileno(), fcntl.LOCK_UN)


def load_json(path: Path) -> Any:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def parse_time(value: str) -> dt.datetime:
    return dt.datetime.fromisoformat(value)


def active_batch_path(work_dir: Path) -> Path:
    return work_dir / "active-batch.json"


def batch_path(work_dir: Path, batch_id: str) -> Path:
    return work_dir / "batches" / f"{batch_id}.json"


def result_path(work_dir: Path, batch_id: str, code: str) -> Path:
    return work_dir / "results" / batch_id / f"{code}.json"


def read_checklist(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    entries: list[dict[str, str]] = []
    for index, line in enumerate(lines):
        match = LINE_RE.match(line.rstrip("\n"))
        if match:
            entries.append({
                "index": str(index),
                "status": match.group("status"),
                "code": match.group("code"),
                "name": match.group("name"),
            })
    return lines, entries


def set_checklist_status(lines: list[str], index: int, status: str) -> None:
    ending = "\n" if lines[index].endswith("\n") else ""
    body = lines[index].rstrip("\n")
    match = LINE_RE.match(body)
    if not match:
        raise ValueError(f"Checklist line {index + 1} is no longer a municipality entry")
    lines[index] = f"{match.group('prefix')}{status}{match.group('suffix')}{ending}"


def command_claim(args: argparse.Namespace) -> int:
    repo = Path(args.repo).resolve()
    checklist = repo / CHECKLIST_NAME
    work_dir = repo / WORK_NAME
    with exclusive_lock(work_dir):
        active_path = active_batch_path(work_dir)
        if active_path.exists():
            active = load_json(active_path)
            age = now_jst() - parse_time(active["claimed_at"])
            if age < dt.timedelta(minutes=args.lease_minutes):
                print(json.dumps({"status": "busy", "active_batch": active}, ensure_ascii=False))
                return 2
            active["status"] = "expired"
            active["expired_at"] = iso_now()
            atomic_json(batch_path(work_dir, active["batch_id"]), active)
            active_path.unlink()

        lines, entries = read_checklist(checklist)
        # Resume interrupted work first, then claim untouched municipalities.
        candidates = [entry for entry in entries if entry["status"] == "~"]
        candidates.extend(entry for entry in entries if entry["status"] == " ")
        selected = candidates[: args.count]
        if not selected:
            print(json.dumps({"status": "complete", "municipalities": []}, ensure_ascii=False))
            return 0

        batch_id = now_jst().strftime("%Y%m%dT%H%M%S") + "-" + uuid.uuid4().hex[:8]
        for entry in selected:
            set_checklist_status(lines, int(entry["index"]), "~")
        atomic_text(checklist, "".join(lines))

        batch = {
            "batch_id": batch_id,
            "status": "active",
            "claimed_at": iso_now(),
            "lease_minutes": args.lease_minutes,
            "municipalities": [
                {"code": entry["code"], "name": entry["name"]} for entry in selected
            ],
        }
        atomic_json(batch_path(work_dir, batch_id), batch)
        atomic_json(active_path, batch)
        print(json.dumps({**batch, "status": "claimed"}, ensure_ascii=False))
    return 0


def validate_result(payload: Any, expected_code: str | None = None) -> list[str]:
    errors: list[str] = []
    if not isinstance(payload, dict):
        return ["result must be a JSON object"]
    code = payload.get("municipality_code")
    name = payload.get("municipality")
    if not isinstance(code, str) or not re.fullmatch(r"\d{5}", code):
        errors.append("municipality_code must be a five-digit string")
    if expected_code and code != expected_code:
        errors.append(f"municipality_code must be {expected_code}")
    if not isinstance(name, str) or not name.strip():
        errors.append("municipality must be a non-empty string")
    if payload.get("status") not in {"success", "failed"}:
        errors.append("status must be success or failed")
    records = payload.get("records")
    if not isinstance(records, list):
        errors.append("records must be an array")
        return errors
    if payload.get("status") == "failed" and records:
        errors.append("failed results cannot contain records")
    for number, record in enumerate(records, 1):
        prefix = f"record {number}: "
        if not isinstance(record, dict):
            errors.append(prefix + "must be an object")
            continue
        missing = sorted(field for field in REQUIRED_FIELDS if field not in record)
        if missing:
            errors.append(prefix + "missing " + ", ".join(missing))
        if record.get("municipality_code") != code:
            errors.append(prefix + "municipality_code does not match result")
        if record.get("municipality") != name:
            errors.append(prefix + "municipality does not match result")
        if record.get("category") not in CATEGORIES:
            errors.append(prefix + "invalid category")
        if record.get("discount_status") not in DISCOUNT_STATUSES:
            errors.append(prefix + "invalid discount_status")
        if record.get("discount_scope") not in DISCOUNT_SCOPES:
            errors.append(prefix + "invalid discount_scope")
        if record.get("accessibility_review_status") not in ACCESS_STATUSES:
            errors.append(prefix + "invalid accessibility_review_status")
        source = record.get("source_url")
        if not isinstance(source, str) or not source.startswith("https://"):
            errors.append(prefix + "source_url must use https")
        urls = [source] if isinstance(source, str) else []
        for field in ("additional_source_urls", "accessibility_source_urls"):
            value = record.get(field, [])
            if not isinstance(value, list):
                errors.append(prefix + f"{field} must be an array")
            else:
                urls.extend(url for url in value if isinstance(url, str))
        if any("shogaisha-techo.com" in url.lower() for url in urls):
            errors.append(prefix + "banned source domain")
        features = record.get("accessibility_features", [])
        if not isinstance(features, list):
            errors.append(prefix + "accessibility_features must be an array")
        else:
            for feature in features:
                if not isinstance(feature, dict) or feature.get("status") not in FEATURE_STATUSES:
                    errors.append(prefix + "invalid accessibility feature")
                    break
    return errors


def command_validate(args: argparse.Namespace) -> int:
    payload = load_json(Path(args.input))
    errors = validate_result(payload, args.municipality_code)
    print(json.dumps({"valid": not errors, "errors": errors}, ensure_ascii=False, indent=2))
    return 1 if errors else 0


def command_submit(args: argparse.Namespace) -> int:
    repo = Path(args.repo).resolve()
    work_dir = repo / WORK_NAME
    source = Path(args.input).resolve()
    with exclusive_lock(work_dir):
        batch_file = batch_path(work_dir, args.batch)
        if not batch_file.exists():
            raise ValueError("Unknown batch")
        batch = load_json(batch_file)
        allowed = {item["code"] for item in batch["municipalities"]}
        payload = load_json(source)
        code = payload.get("municipality_code")
        if code not in allowed:
            raise ValueError("Result municipality is not part of this batch")
        errors = validate_result(payload, code)
        if errors:
            print(json.dumps({"accepted": False, "errors": errors}, ensure_ascii=False, indent=2))
            return 1
        destination = result_path(work_dir, args.batch, code)
        atomic_json(destination, payload)
        print(json.dumps({"accepted": True, "path": str(destination)}, ensure_ascii=False))
    return 0


def identity(record: dict[str, Any]) -> tuple[str, str, str]:
    normalize = lambda value: re.sub(r"[\s　・･ー\-]", "", str(value or "")).lower()
    return normalize(record.get("name")), normalize(record.get("address")), str(record.get("source_url") or "")


def next_sequence(records: list[dict[str, Any]], code: str) -> int:
    sequences = []
    for record in records:
        match = ID_RE.match(str(record.get("id", "")))
        if match and match.group("code") == code:
            sequences.append(int(match.group("sequence")))
    return max(sequences, default=0) + 1


def validate_dataset(records: Any) -> list[str]:
    if not isinstance(records, list):
        return ["dataset root must be an array"]
    ids = [record.get("id") for record in records if isinstance(record, dict)]
    errors = []
    if len(ids) != len(records):
        errors.append("every dataset item must be an object with an id")
    if len(ids) != len(set(ids)):
        errors.append("dataset contains duplicate ids")
    return errors


def command_merge(args: argparse.Namespace) -> int:
    repo = Path(args.repo).resolve()
    checklist = repo / CHECKLIST_NAME
    data_file = repo / DATA_NAME
    work_dir = repo / WORK_NAME
    with exclusive_lock(work_dir):
        batch_file = batch_path(work_dir, args.batch)
        if not batch_file.exists():
            raise ValueError("Unknown batch")
        batch = load_json(batch_file)
        records = load_json(data_file)
        dataset_errors = validate_dataset(records)
        if dataset_errors:
            raise ValueError("; ".join(dataset_errors))
        lines, entries = read_checklist(checklist)
        entry_by_code = {entry["code"]: entry for entry in entries}
        known = {identity(record) for record in records}
        merged: list[dict[str, Any]] = []
        completed: list[str] = []
        failed: list[str] = []
        pending: list[str] = []

        for municipality in batch["municipalities"]:
            code = municipality["code"]
            path = result_path(work_dir, args.batch, code)
            if not path.exists():
                pending.append(code)
                continue
            payload = load_json(path)
            errors = validate_result(payload, code)
            if errors or payload["status"] == "failed":
                failed.append(code)
                continue
            sequence = next_sequence(records + merged, code)
            for candidate in payload["records"]:
                key = identity(candidate)
                if key in known:
                    continue
                record = dict(candidate)
                record["id"] = f"{code}-{sequence:03d}"
                sequence += 1
                merged.append(record)
                known.add(key)
            entry = entry_by_code.get(code)
            if not entry:
                raise ValueError(f"Municipality {code} is missing from checklist")
            set_checklist_status(lines, int(entry["index"]), "x")
            completed.append(code)

        prospective = records + merged
        dataset_errors = validate_dataset(prospective)
        if dataset_errors:
            raise ValueError("; ".join(dataset_errors))

        stamp = now_jst().strftime("%Y%m%dT%H%M%S")
        backup_dir = work_dir / "backups" / f"{stamp}-{args.batch}"
        backup_dir.mkdir(parents=True, exist_ok=False)
        shutil.copy2(data_file, backup_dir / data_file.name)
        shutil.copy2(checklist, backup_dir / checklist.name)
        atomic_json(data_file, prospective)
        atomic_text(checklist, "".join(lines))

        batch["status"] = "merged" if not pending and not failed else "partial"
        batch["merged_at"] = iso_now()
        batch["completed"] = completed
        batch["failed"] = failed
        batch["pending"] = pending
        batch["added_records"] = len(merged)
        batch["backup_dir"] = str(backup_dir)
        atomic_json(batch_file, batch)
        active_path = active_batch_path(work_dir)
        if active_path.exists() and load_json(active_path).get("batch_id") == args.batch:
            active_path.unlink()
        print(json.dumps({
            "status": batch["status"],
            "completed": completed,
            "failed": failed,
            "pending": pending,
            "added_records": len(merged),
            "backup_dir": str(backup_dir),
        }, ensure_ascii=False, indent=2))
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", default=str(DEFAULT_REPO))
    subparsers = parser.add_subparsers(dest="command", required=True)
    claim = subparsers.add_parser("claim")
    claim.add_argument("--count", type=int, default=4, choices=range(1, 9))
    claim.add_argument("--lease-minutes", type=int, default=120)
    claim.set_defaults(func=command_claim)
    validate = subparsers.add_parser("validate")
    validate.add_argument("--input", required=True)
    validate.add_argument("--municipality-code")
    validate.set_defaults(func=command_validate)
    submit = subparsers.add_parser("submit")
    submit.add_argument("--batch", required=True)
    submit.add_argument("--input", required=True)
    submit.set_defaults(func=command_submit)
    merge = subparsers.add_parser("merge")
    merge.add_argument("--batch", required=True)
    merge.set_defaults(func=command_merge)
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    try:
        return args.func(args)
    except (OSError, ValueError, json.JSONDecodeError) as error:
        print(json.dumps({"error": str(error)}, ensure_ascii=False), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
