# Agent instructions

These instructions apply to the Himnynas repository. Follow existing project patterns unless a task explicitly calls for changing them. Before editing, inspect the relevant files and current Git state; preserve unrelated and pre-existing worktree changes

## Project overview

Himnynas is a Lithuanian Christian community hymnal at <https://himnynas.com/>. It is a Vue 3 single-page application and progressive web app (PWA), built with Vite, Vue Router 4, JavaScript, and SCSS. Hymn records are bundled JSON. There is no backend or API in this repository.

## Architecture

- `src/main.js` registers the icon component and mounts the Vue application.
- `src/App.vue` renders the router view.
- `src/router/index.js` defines history-mode routes for search (`/`), hymns (`/hymns/:id`), settings, and not found. The hymn route validates numeric IDs against `hymnal-data.json`.
- `src/views/SearchView.vue` searches and lists hymn records. Adjacent results are grouped by category.
- `src/views/HymnView.vue` renders an individual hymn, optional chords and music player, and previous/next navigation.
- `src/views/SettingsView.vue` controls settings that are persisted in browser storage.
- `src/views/NotFoundView.vue` handles unknown or invalid routes.
- `src/stores/chords.js` contains shared reactive chord-display state.
- `src/data/hymnal-data.json` is the active hymn dataset.
- `src/data/new-hymns.json` exists but is not currently imported by application code. Do not assume edits to it affect the app.
- `src/assets/style.scss` imports the view SCSS files. `src/assets/main.css` is currently empty.
- `public/` contains the app icon and iOS startup images. `index.html` contains Lithuanian document metadata and Apple mobile-web-app metadata.

Views currently mix the Composition API (`<script setup>`) and Options API. Follow the convention already used by the file being changed unless there is a clear reason to depart from it. Use the existing global and view-level SCSS files; there are no scoped SCSS modules in the current implementation.

## Development conventions

- Follow the repository's Prettier configuration.
- Use two-space indentation, no semicolons, and single quotes in JavaScript, consistent with the current codebase.
- Prefer focused changes that match the surrounding Vue and SCSS patterns.
- Avoid adding dependencies or introducing architectural layers unless they provide a clear benefit.
- Do not perform broad refactors as part of an unrelated feature or bug fix.
- Keep responsive behaviour, touch targets, and installed-PWA behaviour in mind when changing UI.

## Development workflow

Dependencies are installed using `npm install`. The lockfile is `package-lock.json`.

Available scripts:

- `npm run dev` — start the local Vite development server.
- `npm run host` — start the Vite server exposed on the local network for device testing.
- `npm run build` — create the production build in the ignored `dist/` directory and generate the PWA service worker and manifest.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint with `--fix`; this command can modify files. Inspect the script and resulting diff before using it.
- `npm run format` — format files and write changes. Inspect the resulting diff.

For a non-mutating lint check, use:

```sh
npx eslint . --ext .vue,.js,.jsx,.cjs,.mjs --ignore-path .gitignore
```

For a non-mutating formatting check, use:

```sh
npx prettier --check src/ AGENTS.md
```

Check `package.json` before relying on a command or adding a new script. There is currently no automated test suite or test script. A successful build and static lint check do not establish runtime correctness.

Before running commands that generate output, inspect the worktree and preserve existing changes. The build writes to `dist/`; do not remove or overwrite user data. Do not run auto-fixing commands unless the task calls for them and their effects have been considered.

## Hymn data integrity

`src/data/hymnal-data.json` is the active dataset. Each record has:

- `number`: a numeric identifier used as the hymn route ID.
- `category`: the hymn category.
- `verses`: an array of verses, each represented as an array of lyric lines.

Optional or additional fields currently used include `subcategory`, `languages` (`russian` and/or `english` numeric references), `hymnal.net-url`, `melody-url`, `chorus`, `chorus2`, and `chords` (`capo`, `verse`, and `chorus`). Inspect actual records and consuming code before changing or extending the schema.

Important constraints:

- Preserve unique numeric IDs. Hymn numbers are public route identifiers and can correspond to external hymn or recording references; do not renumber them casually.
- Preserve the existing record-array order. Category grouping and previous/next navigation depend on dataset order.
- Preserve Lithuanian lyrics, punctuation, whitespace, and verse/chorus structure unless a content change is explicitly requested.
- Chord strings are positional and whitespace-sensitive. Keep chord lines aligned with the corresponding lyric lines, and validate alignment against the lines the application actually renders.
- The current view renders verse chords for the first verse and chorus chords for `chorus`. It does not currently render chord lines for later verses or `chorus2`.
- Keep language reference numbers and both hymnal.net URL fields associated with the intended hymn or recording.
- Do not silently normalize legacy data or change the schema as part of unrelated work.

Known dataset irregularities observed during onboarding:

- At least one record has a legacy key named `subcategory ` with a trailing space. Do not silently rename it without checking every consumer and planning a deliberate migration.
- Hymn `1017` has nine chorus lyric lines but four chorus chord lines. Treat this as a known mismatch, not permission to rewrite the hymn. Verify the intended content before changing it.

## Search and settings behaviour

Search currently matches:

- Category text.
- Lyric text in verses and chorus.
- Russian and English reference numbers by exact string equality.

Search does not currently match title, subcategory, chord text, or URL fields. Do not assume these fields are searchable when changing search behaviour.

Persistence currently uses:

- `sessionStorage` key `searchValue` for search text.
- `localStorage` key `chordsEnabled` for chord visibility.
- `localStorage` key `hymnalWidgetEnabled` for the external music widget setting.

Keep storage keys, defaults, initialization, and writes consistent across the settings and hymn views. Consider existing users' stored preferences when changing a key or its meaning.

## PWA, mobile, and offline behaviour

`vite.config.js` uses `vite-plugin-pwa` with the generated Workbox `generateSW` strategy and a custom manifest containing Lithuanian app metadata and the `/icons/icon.png` icon. The production build generated a service worker at `/sw.js`, precached the generated application assets, and used `index.html` as the navigation fallback. The hymn JSON is bundled into application JavaScript chunks, so it is available when those chunks are cached. There is no explicit runtime-caching configuration.

The iOS startup images under `public/splash_screens/` were not included in the observed precache output. Do not assume those images are available offline simply because they are referenced in `index.html`.

The generated registration script registers the service worker, but the application currently has no service-worker update event handling or update-prompt UI. Verify the current plugin configuration and build output before relying on version-specific defaults or changing registration behaviour.

Preserve the following unless a task explicitly requires changing them:

- `viewport-fit=cover` and Apple web-app metadata in `index.html`.
- iOS startup-image links and their corresponding public assets.
- Root-relative asset paths and the current PWA scope/base-path assumptions.
- Safe-area handling for fixed navigation and other screen-edge UI.

During onboarding, safe-area CSS had these potential issues: a later `padding-left: 30px` declaration on the top bar appeared to override an earlier left safe-area value, and the fixed bottom bar did not explicitly add bottom safe-area padding. Re-check the current cascade and layout before changing these areas; treat this as an observed concern, not an instruction to preserve a defect.

Offline behaviour and iOS rendering were not device-tested during onboarding. When changing PWA, caching, routing, viewport, or fixed-shell behaviour, verify service-worker updates, offline navigation, and relevant iOS Safari/installed-PWA layouts in a browser or on a device where possible. Clearly distinguish build/configuration checks from runtime and device testing.

Because the application uses Vue Router history mode, the production host must serve the SPA entry point for direct requests to application routes. The hosting provider and actual deployment process were not identifiable from the repository during onboarding. Do not assume a provider or deployment workflow without evidence.

## Music integration

The optional music player loads the external hymnal.net widget from:

`https://www.hymnal.net/js/widget/widget.min.js?ver=1.2`

The current hymn number is passed through the widget element's `num` attribute. `melody-url` is used as an availability flag; it is not used as a direct audio source. The app does not implement its own MP3 player.

The integration currently uses a `MutationObserver` to detect the iframe, a 12-second timeout, script-error handling, online/offline listeners, and per-load token logic. It also updates an internal `musicStatus` value that is not currently rendered in the UI.

Preserve observer/listener cleanup and per-load token protections when changing this lifecycle. Script and iframe callbacks around route changes and component unmount may have lifecycle edge cases; verify those in a browser, as source inspection alone cannot establish the external widget's runtime behaviour.

## Known behaviour and potential issues

The following were identified during repository familiarisation. Re-check the current code before acting, because they may have changed:

- Search checks whether the query is non-empty but uses the untrimmed query for matching. Leading or trailing spaces may therefore prevent expected matches.
- The top bar's later `padding-left: 30px` declaration appeared to override its earlier left safe-area padding.
- The fixed bottom bar did not explicitly include bottom safe-area padding.
- Music-player status is maintained internally but is not currently displayed; external script/iframe callbacks may need additional lifecycle verification.

These are observations, not approved feature changes. Fix them only when relevant to the task, and preserve intended existing behaviour.

## Change and verification principles

- Inspect the affected code and data before editing; do not rely on this document as a substitute for reading the implementation.
- Preserve existing behaviour and user content. Do not silently alter hymn text, IDs, metadata, chord alignment, or external mappings.
- Prefer small, targeted changes. Avoid unnecessary dependencies and broad refactors.
- For view changes, run non-mutating ESLint and inspect the focused diff.
- For routing, PWA configuration, service-worker, or public-asset changes, also run `npm run build` and inspect the generated output where relevant.
- For data changes, validate record IDs, ordering, schema consistency, and lyric/chord alignment relevant to the modified records.
- Manually verify browser, offline, and device behaviour when the change affects those areas and the environment permits it.
- There is no automated test suite currently configured. Report that limitation and distinguish static checks/build results from runtime testing.
- Do not claim that deployment, offline use, or iOS behaviour has been verified unless it was actually tested.
