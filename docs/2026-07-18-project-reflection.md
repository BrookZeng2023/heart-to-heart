# Collaboration Reflection — 2026-07-18

| Corrected output or decision | Cause | Opening instruction or evidence that would prevent recurrence |
|---|---|---|
| Treating an unsigned archive in Organizer as the final distribution artifact | Information and workflow distinction were not explicit: archive inspection and signed App Store Connect upload are different stages | At the start, state the authoritative artifact and require a signed export/upload result before claiming distribution success |
| Uploading before checking the app icon's alpha channel | Reasoning/verification error: visual appearance was treated as sufficient | Run `sips -g pixelWidth -g pixelHeight -g hasAlpha` for every `AppIcon.appiconset` image before archiving |
| Treating creation of an App Store Connect app record as implicit | Missing external-state check | Query or visibly confirm the exact Bundle ID has an App Store Connect app record before export/upload |
| Treating developer-team membership as equivalent to TestFlight access | Reasoning/scope error | Separate contributor access, App Store Connect roles, external TestFlight testers, and build assignment in the opening plan |
| Treating a reported review approval as proof that the TestFlight build is installable | Verification error | Re-read the live TestFlight build and tester rows; report `Waiting for Review` or `No Builds Available` verbatim until they change |
| Assuming a source edit would immediately appear in an installed/offline app | Verification error: the PWA cache version was not advanced after the UI change | For every shipped web-asset change, increment `CACHE_NAME` in `service-worker.js` and verify the generated `web/` files contain the new UI marker |
| Replacing the accepted 1.2 adult-mode layout with home-screen badges and a cache-v3 update | Scope-control error: a new navigation treatment was inferred from an entry-visibility complaint without confirming that the working prior layout should be preserved | When a user says the prior release works, restore that release first; propose any navigation redesign separately with a visual proof point |

## Privacy check

- No passwords, OTPs, API keys, phone numbers, or tester contact details are recorded.
