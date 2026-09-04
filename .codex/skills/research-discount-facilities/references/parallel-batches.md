# Parallel batch mode

Use this mode only when the user requests accelerated or parallel nationwide research.

## Coordinator workflow

1. Claim up to four municipalities:

   ```bash
   python3 scripts/batch_manager.py claim --count 4
   ```

   Exit code `2` means another unexpired batch is active. Do not start more research; end the run quietly and let the next scheduled run retry. Claims expire after 120 minutes by default, and interrupted `[~]` entries are claimed before untouched entries.

2. Assign exactly one claimed municipality to each of four independent research workers. The coordinator may be one of those workers. Each worker follows all scope, source, research, and record rules in `SKILL.md`, but must not edit the production dataset or checklist.

3. Each worker creates one result envelope outside the production dataset:

   ```json
   {
     "municipality_code": "14102",
     "municipality": "横浜市神奈川区",
     "status": "success",
     "records": [],
     "report": {
       "source_families_checked": [],
       "duplicates_or_merged_names": [],
       "uncertain_candidates_not_saved": []
     }
   }
   ```

   A verified zero-result search is `success` with an empty `records` array. An inadequate or interrupted search is `failed` with an empty array and a concise `error` field. Do not put secrets in result files.

4. Validate and submit each worker file separately:

   ```bash
   python3 scripts/batch_manager.py validate --municipality-code 14102 --input /absolute/result.json
   python3 scripts/batch_manager.py submit --batch BATCH_ID --input /absolute/result.json
   ```

5. After all workers finish or the run must end, perform one serialized merge:

   ```bash
   python3 scripts/batch_manager.py merge --batch BATCH_ID
   ```

   The merge acquires an exclusive lock, validates the existing and prospective datasets, assigns final IDs, skips exact facility identities already present, creates timestamped backups, atomically replaces the JSON and checklist, and releases the active batch. Only successful submitted municipalities become `[x]`; failed or missing municipalities remain `[~]` and are prioritized next time.

## Safety invariants

- Workers never edit `facility-research.json` or `FACILITY-DATA.md`.
- Only `batch_manager.py merge` writes production data after a batch is claimed.
- Never bypass a validation failure or manually merge a partially written worker file.
- Do not start a second batch while the claim command reports `busy`.
- Do not delete `.facility-research-work`; it contains recovery state and backups.
