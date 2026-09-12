# Project Handoff

Updated: 2026-09-12 22:40 Europe/London
Project: heart-to-heart
Task: Maintain the cross-platform app, refresh built-in question banks, and distribute native builds.

## Objective

Keep the heart-to-heart app usable on macOS, Android, iOS Simulator, and iPhone;
refresh its built-in question banks and distribute verified native builds.

## Verified completed work

- Capacitor iOS/Android project scaffolding exists under `ios/` and `android/`.
- iOS layout overflow mitigation is implemented in `styles.css` and `app.js`;
  the rationale is recorded in `docs/ios-layout-fix-history.md`.
- App Store Connect app record “心里有你” exists with Bundle ID
  `com.brook.hearttoheart`.
- Build 1 (version 1.0) was uploaded successfully after flattening the app
  icon to an opaque 1024x1024 PNG. The reusable error is documented in
  `docs/ios-distribution-troubleshooting.md`.
- App Store Connect export-compliance information was supplied for the build.
- The current TestFlight page contains one external tester record and the
  project's beta test description/contact information.
- All 164 safe built-in questions in `app.js` were refreshed: 84 couple
  questions and 80 group questions.
- A shared 100-question `ADULT_QUESTION_BANK` was added to both modes. It is
  available as the couple-only `spicy` mode and optional group `spicy` topic,
  defaults off for group play, and requires a per-game adult-consent prompt.
- The 1.3 home-screen-badge and cache-v3 changes were rolled back at the user's
  request. Current source returns to the 1.2 adult-mode layout and cache name
  `heart-to-heart-v2`.
- Android version 1.2.1 (versionCode 5) was built successfully. The versionCode
  is intentionally higher than the superseded 1.3 build so Android can install
  this rollback over it; the app behavior is the 1.2 rollback state.
- A signed Apple Silicon macOS DMG for version 1.2.1 was built successfully.
  `hdiutil verify`, `codesign --verify --deep --strict`, and bundled-cache
  checks passed.
- iOS version 1.2.1 (Build 2) was archived, signed with Apple Distribution,
  uploaded to App Store Connect, and marked `Ready to Submit` after export
  compliance was completed.
- App Store metadata for version 1.2.1 now includes three 6.5-inch iPhone
  screenshots, one 13-inch iPad screenshot, description, keywords, support URL,
  the Games / Trivia / Casual categories, the Build 2 association, and a 16+
  age rating (17+ on operating systems earlier than version 26).
- `PRIVACY.md` documents the app's no-data-collection behavior. App Store
  Connect has the matching privacy-policy URL and a saved `Data Not Collected`
  response, but the privacy response still requires the final Publish confirmation.
- The iOS icon generator now renders an opaque full-bleed App Store icon;
  `sips` reports 1024x1024 and `hasAlpha: no`.

## Current state and blockers

- The last observed TestFlight UI status for Build 1 was `Waiting for Review`;
  the tester row showed `No Builds Available`. Re-check the live page before
  claiming that an invite or installation is available.
- A developer-team invitation for the tester account was still shown as
  `Resend Invitation`. Developer-team membership is not required for external
  TestFlight testing.
- The App Store version page still showed `Prepare for Submission`; do not
  confuse that state with TestFlight external review.
- Version 1.2.1 is prepared but cannot be added for review until the privacy
  response is published and App Review contact first name, last name, email,
  and phone number are supplied.
- Android state: `android/app/build/outputs/apk/debug/app-debug.apk` exists
  (4.1 MB, SHA-256 `4a84f06c4dcdfb60b4b2b1f01fe67674ad2bb0ba0231c86dfaef8335c5b6269b`)
  and reports package `com.brook.hearttoheart`, versionCode 5, versionName 1.2.1.
- macOS state: `dist/心里有你-1.2.1-arm64.dmg` exists (134 MB, SHA-256
  `1b319cbd67b95bf997dea9351fa03939467ea56206cace6cd9375d2a0f57c811`).

## Next actions

1. Publish the saved App Privacy `Data Not Collected` response after explicit
   confirmation.
2. Add the App Review contact name, email, and phone number, then save.
3. Add version 1.2.1 for review and complete the final review submission after
   explicit confirmation.
4. For future uploads, increment the build number and repeat the icon alpha,
   Bundle ID, signing, and upload checks.
5. For a distributable Android release, configure a release signing key and run
   a release build; the current APK uses Android's debug signing configuration.

## Validation to repeat

- `sips -g pixelWidth -g pixelHeight -g hasAlpha ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png`
  — expected: 1024x1024 and `hasAlpha: no`.
- Verify the exported IPA with `codesign --verify --deep --strict` before upload.
- Confirm App Store Connect shows the actual build status before telling a
  tester to install.
- `node --check app.js && npm run check` — expected: JavaScript syntax checks pass.
- Question-bank count check — expected: 100 unique adult questions shared by
  both modes; 184 couple and 180 group questions in total.
- `npm run android:build` — expected: `BUILD SUCCESSFUL` and a debug APK at
  `android/app/build/outputs/apk/debug/app-debug.apk`.
- `/Users/brook/Library/Android/sdk/build-tools/35.0.0/aapt dump badging android/app/build/outputs/apk/debug/app-debug.apk`
  — expected: package `com.brook.hearttoheart`, versionCode 5, versionName 1.2.1.
- `hdiutil verify dist/心里有你-1.2.1-arm64.dmg` — expected: valid checksum.
- `codesign --verify --deep --strict dist/mac-arm64/心里有你.app` — expected:
  no output and exit code 0.

## Pitfalls

- Xcode account authentication and browser/App Store Connect authentication can
  be separate sessions.
- An unsigned archive may appear in Organizer but can lack team metadata;
  successful signed export/upload is the authoritative distribution evidence.
- App Store Connect must have the app record before upload can complete.
- Apple rejects large app icons with transparency/alpha (error 90717).
- A developer-team invite is different from a TestFlight tester invite.
- Never report an invitation as sent while the live UI says `No Builds Available`.
- A debug APK is installable for testing but is not a Play Store release; do not
  present it as a signed production package.
- The adult topic must remain opt-in for group play and must retain the
  per-game adult-consent prompt; do not add it to the safe mixed mode.
- Every app-shell UI release must increment the service-worker cache name and
  verify `web/` before native packaging, or existing installs can show stale UI.

## Files and external pages

- `/Users/brook/Brook/Repos/heart-to-heart/ios/App/App.xcworkspace`
- `/Users/brook/Brook/Repos/heart-to-heart/docs/ios-distribution-troubleshooting.md`
- `/Users/brook/Brook/Repos/heart-to-heart/docs/2026-07-18-project-reflection.md`
- `/Users/brook/Brook/Repos/heart-to-heart/docs/engineering-lessons.md`
- `/Users/brook/Brook/Repos/heart-to-heart/app.js` — refreshed built-in question banks.
- `/Users/brook/Brook/Repos/heart-to-heart/android/app/build/outputs/apk/debug/app-debug.apk`
  — verified Android 1.2.1 rollback debug install package.
- `/Users/brook/Brook/Repos/heart-to-heart/dist/心里有你-1.2.1-arm64.dmg`
  — verified signed Apple Silicon macOS installer.
- `https://appstoreconnect.apple.com/teams/4bf39c76-67dc-4c5f-9690-1cd17b6ad0ff/apps/6792204169/testflight/ios`

## Privacy check

- No passwords, OTPs, API keys, phone numbers, or raw personal data are recorded here.
