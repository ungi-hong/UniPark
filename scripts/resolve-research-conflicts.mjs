#!/usr/bin/env node
// research/* PR に main をマージした際のコンフリクトを決定的に解消する。
// マージ中 (git merge が失敗した直後) に呼ばれる前提。
//
// 対象は調査ルーチンが触る 2 ファイルのみ:
//   - apps/web/data/discount-research.json : 両ブランチが末尾に追記するため
//     コンフリクトするが、実体は「main の全件 + PR の新規エントリ」の和集合。
//   - PLACE-DATA.md : 各ブランチが自分の担当自治体だけステータスを進めるため、
//     行ごとに「進んでいる方のマーク」を採用すればよい。
// それ以外のファイルがコンフリクトしていたら手動対応が必要なので exit 1。

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const git = (...args) =>
  execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

const JSON_PATH = 'apps/web/data/discount-research.json';
const PLACE_PATH = 'PLACE-DATA.md';

const conflicted = git('diff', '--name-only', '--diff-filter=U')
  .split('\n')
  .filter(Boolean);

if (conflicted.length === 0) {
  console.log('コンフリクトなし');
  process.exit(0);
}

const allowed = new Set([JSON_PATH, PLACE_PATH]);
const unexpected = conflicted.filter((f) => !allowed.has(f));
if (unexpected.length > 0) {
  console.error(`想定外のファイルがコンフリクトしています: ${unexpected.join(', ')}`);
  process.exit(1);
}

// :2 = ours (PR ブランチ), :3 = theirs (main)
const show = (stage, path) => git('show', `:${stage}:${path}`);

if (conflicted.includes(JSON_PATH)) {
  const ours = JSON.parse(show(2, JSON_PATH));
  const theirs = JSON.parse(show(3, JSON_PATH));
  const theirIds = new Set(theirs.map((e) => e.id));
  const ourNew = ours.filter((e) => !theirIds.has(e.id));
  const merged = [...theirs, ...ourNew];
  if (new Set(merged.map((e) => e.id)).size !== merged.length) {
    console.error(`${JSON_PATH}: マージ後に id が重複しています`);
    process.exit(1);
  }
  fs.writeFileSync(JSON_PATH, JSON.stringify(merged, null, 2) + '\n');
  git('add', JSON_PATH);
  console.log(
    `${JSON_PATH}: main ${theirs.length} 件 + PR 新規 ${ourNew.length} 件 = ${merged.length} 件`
  );
}

if (conflicted.includes(PLACE_PATH)) {
  // マークの進捗順。○ (人手確認) は廃止済みだが過去データ互換のため残す。
  const RANK = { ' ': 0, '~': 1, '△': 1, '○': 2 };
  const parseLine = (line) => line.match(/^- \[(.)\] (\d{5}) (.+)$/);

  const ourStatus = new Map();
  for (const line of show(2, PLACE_PATH).split('\n')) {
    const m = parseLine(line);
    if (m) ourStatus.set(m[2], m[1]);
  }

  // main 側の構造を骨格に、PR 側の方が進んでいる行だけ差し替える
  const theirCodes = new Set();
  const mergedLines = show(3, PLACE_PATH)
    .split('\n')
    .map((line) => {
      const m = parseLine(line);
      if (!m) return line;
      theirCodes.add(m[2]);
      const ourMark = ourStatus.get(m[2]);
      if (ourMark === undefined) return line;
      return (RANK[ourMark] ?? 0) > (RANK[m[1]] ?? 0)
        ? `- [${ourMark}] ${m[2]} ${m[3]}`
        : line;
    });

  // PR 側にしかない自治体行があれば構造が変わっているので手動対応に倒す
  const extra = [...ourStatus.keys()].filter((c) => !theirCodes.has(c));
  if (extra.length > 0) {
    console.error(`${PLACE_PATH}: main に存在しない自治体コードが PR 側にあります: ${extra.join(', ')}`);
    process.exit(1);
  }

  fs.writeFileSync(PLACE_PATH, mergedLines.join('\n'));
  git('add', PLACE_PATH);
  console.log(`${PLACE_PATH}: ステータス行を統合しました`);
}
