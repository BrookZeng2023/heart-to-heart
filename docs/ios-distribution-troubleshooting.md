# iOS Distribution Troubleshooting

## App Store Connect upload error 90717: invalid large app icon

- Symptom: `xcodebuild -exportArchive` reaches App Store Connect analysis and fails with `Invalid large app icon`; the large icon cannot be transparent or contain an alpha channel.
- Cause: the `AppIcon.appiconset` PNG contains an alpha channel, commonly because rounded-corner artwork was exported with transparent corners.
- Fix: flatten the icon onto an opaque background, keep the required pixel dimensions, and verify that the image has no alpha channel before archiving.
- Project file: `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png`.

### Preflight check for future iOS apps

```sh
sips -g pixelWidth -g pixelHeight -g format -g hasAlpha path/to/AppIcon.png
```

The App Store icon should report the required dimensions and `hasAlpha: no`. Repeat the check for every file referenced by `AppIcon.appiconset/Contents.json` before uploading.

### Related signing/upload checks

- Keep the App Store Connect app record's Bundle ID identical to `PRODUCT_BUNDLE_IDENTIFIER`.
- If an unsigned archive is used, export with automatic distribution signing and `-allowProvisioningUpdates`; Organizer may reject the archive because it has no team metadata even when the exported IPA is correctly signed.
- Verify the exported IPA with `codesign --verify --deep --strict` and confirm the authority is `Apple Distribution` before uploading.
