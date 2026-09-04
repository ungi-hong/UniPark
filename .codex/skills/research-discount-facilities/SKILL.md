---
name: research-discount-facilities
description: Research disability discounts and accessibility features for visitor facilities, either one Japanese municipality at a time or in a safely coordinated parallel batch, and update UniPark's facility data and checklist. Use for municipality research, accelerated nationwide research, the next municipality, or the accessible-facility research loop. Do not use for standalone parking lots or government benefit programs.
---

# Research accessible facilities

Research one municipality per ordinary run. Add verified facilities to `/Users/apple/github/UniPark/apps/web/data/facility-research.json` and update `/Users/apple/github/UniPark/FACILITY-DATA.md`.

When the user requests accelerated or parallel nationwide research, use [parallel batch mode](references/parallel-batches.md). In that mode, each worker still researches exactly one municipality; only the coordinator claims municipalities and performs the serialized merge.

## Scope

Include physical visitor facilities when an official source confirms at least one of these:

- a disability-related admission or usage discount
- an accessibility feature, support service, or documented access limitation useful to disabled visitors

Relevant facilities include:

- museums, galleries, archives, libraries, university museums, memorial halls, zoos, aquariums, gardens, parks, observatories
- cinemas, theaters, halls, arenas, stadiums, planetariums, sports centers, pools, gyms, community centers
- board-game and hobby venues, public visitor amenities with a usage charge, religious cultural facilities, recreation and experiential attractions
- other public or private visitor facilities with useful, officially documented disability-access information

Exclude parking facilities as standalone places, transport fares, shops' general promotions, medical or welfare benefits, and ordinary facilities for which no disability discount or useful accessibility information can be verified. A facility may be saved without a discount; UI visibility is not a research-stage exclusion criterion. Whether a facility is open, temporarily closed, under renovation, or awaiting reopening never determines whether it is saved. Do not spend research time collecting routine closure, business-day, or reopening information.

## Source requirements

- Use primary sources only: the municipality, facility, designated manager, or operating company.
- Never open, quote, or save URLs from `shogaisha-techo.com`.
- A search snippet or aggregator may help discover a candidate but cannot verify it.
- Every saved record must have a working official `source_url` supporting its principal saved fact. Use additional official sources for discount, accessibility, and address when needed.
- Prefer a facility-specific page. An official municipal list may verify multiple facilities, but preserve facility-specific conditions.
- Do not infer missing eligibility, companion treatment, or prices. Store unknown values as `null` or empty arrays.

## Select the municipality

If the user names a municipality, use it. Otherwise select the first `[ ]` entry in `FACILITY-DATA.md`, from top to bottom. Process exactly one municipality per ordinary run. In parallel batch mode, use the claim script instead of selecting or marking entries manually.

Before web research, change that entry to `[~]`. On successful completion, including a verified zero-result search, change it to `[x]`. If the run is interrupted or cannot adequately verify sources, leave `[~]` so a later run can retry it.

## Research method

First enumerate candidates, then verify facts. Candidate enumeration must use more than ordinary web queries: inspect the municipality's complete facility directory, fee tables and ordinances, Mirairo ID facility list, official tourism/accessibility guide, national/prefectural facility lists, and operator directories. Treat those lists as discovery indexes, not as substitutes for facility-level verification.

For discounts, vary `障害者`, `障がい者`, `障害者手帳`, `療育手帳`, `精神障害者保健福祉手帳`, `ミライロID`, `受給者証`, `減免`, `免除`, `無料`, and `割引`. Separately search accessibility terms such as `バリアフリー`, `車いす`, `多目的トイレ`, `オストメイト`, `補助犬`, `筆談`, `手話`, `点字`, `触地図`, `拡大読書器`, `補聴`, `音声ガイド`, `字幕`, and `センサリーフレンドリー`. Do not search closure or reopening status unless it is necessary to identify the official facility page.

Combine those terms with the municipality and these categories:

- 施設一覧 / 公共施設 / 使用料
- 博物館 / 美術館 / 郷土資料館 / 資料館 / 記念館 / 文書館 / 図書館 / 大学博物館
- スポーツセンター / 体育館 / プール / トレーニング室
- 文化会館 / ホール / 劇場 / 映画館 / アリーナ / 展望台 / プラネタリウム
- 囲碁・将棋等の対局場 / 有料公衆施設 / 神社・寺院の宝物館 / レジャー・体験施設

Do not assume municipal or public-facility lists are exhaustive. Run separate national-government, university, nonprofit/religious, and private-sector discovery passes. Use queries such as `<municipality> 企業ミュージアム 障害者手帳`, `<municipality> 大学博物館 バリアフリー`, `<municipality> 資料館 車椅子`, `<municipality> 囲碁 障がい者料金`, `<municipality> 映画館 障がい者割引`, `<municipality> 劇場 車椅子席`, `<municipality> 神社 宝物館 障害者手帳`, and official-domain searches (`site:go.jp`, `site:lg.jp`, `site:ac.jp`, `site:or.jp`, `site:co.jp`). Verify every result on the operator's own website.

For each candidate, check admission/use discount and accessibility independently. Search both facility-level pages and operator-wide FAQ/fee/accessibility pages; important facts are often placed in accordions, PDFs, ticket-purchase screens, or general FAQ pages rather than the facility homepage. Check existing records by normalized name, address, complex/building relationship, and official URL. When a public-facing complex name and an internal school/building name refer to the same pool or venue, keep one record and use the name visitors will recognize, with the internal name in parentheses.

Before completion, run a gap audit across every category above and every operator class: municipality, prefecture, national government, university, foundation/nonprofit/religious, and private company. A municipality is not complete merely because multiple results were found.

## Record format

Append objects with this shape, preserving JSON formatting:

```json
{
  "id": "13114-001",
  "municipality_code": "13114",
  "municipality": "中野区",
  "name": "施設名",
  "category": "museum",
  "address": "東京都中野区…",
  "latitude": null,
  "longitude": null,
  "regular_price": "一般300円",
  "discount_status": "available",
  "discount": "本人と介助者1名無料",
  "discount_scope": "free",
  "discounted_services": ["入館料"],
  "residency_requirement": null,
  "eligible_handbooks": ["身体障害者手帳", "療育手帳", "精神障害者保健福祉手帳"],
  "eligible_documents": [],
  "grade_conditions": null,
  "companion_policy": "介助者1名無料",
  "requirements": "受付で手帳原本またはミライロIDを提示",
  "valid_from": null,
  "valid_until": null,
  "operational_status": "unknown",
  "status_note": null,
  "status_checked_at": null,
  "accessibility_review_status": "verified",
  "accessibility_features": [
    {
      "type": "accessible_toilet",
      "status": "available",
      "details": "1階に車いす対応トイレあり"
    }
  ],
  "accessibility_notes": null,
  "accessibility_source_urls": ["https://official.example.jp/accessibility"],
  "phone": null,
  "opening_hours": null,
  "closed_days": null,
  "reservation": null,
  "notes": null,
  "source_url": "https://official.example.jp/...",
  "additional_source_urls": [],
  "verified_at": "YYYY-MM-DD"
}
```

Allowed `category` values: `museum`, `gallery`, `zoo`, `aquarium`, `garden`, `park`, `sports`, `pool`, `theater`, `cinema`, `planetarium`, `community`, `leisure`, `other`.

Allowed `discount_scope` values:

- `free`: the disabled visitor's applicable admission or usage fee becomes zero
- `partial`: percentage, fixed-amount, or other non-zero discount
- `conditional`: a discount exists but its amount varies or requires conditions beyond ordinary proof of eligibility

Allowed `discount_status` values:

- `available`: a currently applicable discount is officially verified
- `historical`: only a past, time-bounded discount is verified and no current general discount can be established
- `none`: an official source explicitly confirms there is no disability discount
- `not_applicable`: the relevant admission or service is free for everyone
- `unverified`: the discount could not be confirmed; never use this as a synonym for `none`

Use `{municipality_code}-{sequence}` for `id`, continuing from the municipality's highest sequence. `verified_at` is the actual research date in Japan (`YYYY-MM-DD`). A facility with several discounted services remains one record when the official source presents it as one place; summarize the services in `discount` and `notes`.

`discounted_services` must identify what is discounted, such as `入館料`, `特別展`, `プール`, or `トレーニングルーム`; do not imply that every service in a multipurpose facility is discounted. Record residence, employment, age, advance application, and similar eligibility in `residency_requirement` or `requirements`. Put non-handbook certificates and recipient documents in `eligible_documents`.

Use `valid_from` and `valid_until` when the primary source establishes the discount only for a particular exhibition, event, or sales period. Keep the compatibility fields `operational_status`, `status_note`, and `status_checked_at`, but do not research routine operating status: for new records use `operational_status: "unknown"` and `null` for the status note/check date unless status is inseparable from the source fact. Never change `discount_status` to `historical` merely because a facility is closed. Use `additional_source_urls` when separate official pages are needed to support address or detailed conditions.

Allowed `accessibility_review_status` values are `verified`, `partial`, and `unverified`. Put only officially supported facts in `accessibility_features`. Feature `status` values are `available`, `conditional`, and `unavailable`. Omission means unverified, not unavailable. Useful feature types include `wheelchair_entrance`, `wheelchair_route`, `wheelchair_access`, `wheelchair_assistance`, `elevator`, `accessible_toilet`, `ostomate_toilet`, `wheelchair_rental`, `accessible_parking`, `service_animals`, `writing_support`, `sign_language`, `audio_guide`, `captions`, `braille`, `tactile_guide`, and `sensory_accommodation`. Preserve limitations in `details` or `accessibility_notes`.

## Completion checks

Before marking `[x]`:

- JSON parses successfully.
- IDs are unique.
- Each new source is primary and explicitly supports the saved discount or accessibility fact.
- Each new record has municipality code, municipality, name, category, discount status, accessibility review status, source URL, and verification date.
- Municipality-only, service-only, and exhibition-period conditions are explicitly represented.
- Existing records were not silently rewritten.

Report the municipality, added count, discount-status breakdown, accessibility records, source families checked, duplicates/merged names, and uncertain candidates not saved. If no records were found, say that the municipality was researched with zero verified results.
