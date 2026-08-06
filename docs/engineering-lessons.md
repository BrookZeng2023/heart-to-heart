# Engineering Lessons

Project-specific lessons are merged here instead of recreated in every
session. Cross-project lessons are promoted separately through the Brook
memory-extension workflow.

## 2026-07-18 — iOS distribution and TestFlight state

- Failure mode or method: A valid archive, a successful upload, an App Store
  version review, a TestFlight external review, and a tester invitation are
  separate states.
- Evidence: The build upload succeeded, while the TestFlight UI later showed
  `Waiting for Review` and the tester row showed `No Builds Available`.
- Root cause: Treating a user's reported approval or a nearby App Store page as
  proof of the exact TestFlight build state.
- Reusable check: Read the live TestFlight build row and tester row immediately
  before claiming that a tester can install.
- Prevention instruction: For every external service, report the service's
  current UI/API state separately from the user's expectation until the exact
  state is confirmed.
- Applies to: iOS, Android, web stores, CI/CD, and other external distribution
  services.

## 2026-07-18 — App Store icon alpha preflight

- Failure mode or method: App Store Connect rejected the large icon with error
  90717 because the PNG contained an alpha channel.
- Evidence: `sips` reported `hasAlpha: yes`; after flattening, it reported
  `1024x1024` and `hasAlpha: no`, and the upload succeeded.
- Root cause: Rounded-corner artwork was exported with transparent corners.
- Reusable check: Run `sips -g pixelWidth -g pixelHeight -g hasAlpha` for every
  image referenced by `AppIcon.appiconset/Contents.json` before archiving.
- Prevention instruction: Treat icon dimensions and opacity as a release gate,
  not as a visual-only check.
- Applies to: Future Apple app projects.

## 2026-07-18 — Developer team versus TestFlight tester

- Failure mode or method: Adding an external tester to the developer team did
  not make the TestFlight build installable.
- Evidence: The team member row showed `Resend Invitation`, while TestFlight
  separately showed a tester row and a build-availability state.
- Root cause: Confusing Apple Developer/App Store Connect team membership with
  TestFlight external testing.
- Reusable check: Use TestFlight tester invitations for testers; use developer
  team membership only for contributors who need portal or signing access.
- Prevention instruction: Ask which capability is needed before adding a person
  to a team, and verify the exact TestFlight tester/build state afterward.
- Applies to: All Apple distribution workflows.

## 2026-07-19 — Offline shell cache versioning

- Failure mode or method: An installed or previously opened PWA continued to
  show an old scene screen after a new adult-entry badge was added.
- Evidence: The current source and generated `web/index.html` contained the
  badge, while the service worker still used the prior `heart-to-heart-v2`
  cache name.
- Root cause: Cache-first asset serving was retained without a cache-version
  change when the app shell changed.
- Reusable check: Increment `CACHE_NAME` in `service-worker.js` whenever a
  shipped app-shell asset changes, then inspect `web/` after `npm run web:build`.
- Prevention instruction: Treat service-worker cache versioning as part of the
  native and PWA release checklist, not an optional web-only cleanup.
- Applies to: This app's PWA, Electron shell, and Capacitor asset sync.
