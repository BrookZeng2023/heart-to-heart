#!/bin/zsh

set -euo pipefail

root="${0:A:h:h}"
source_icon="$root/icon.svg"

typeset -A android_sizes=(
  [mdpi]=48
  [hdpi]=72
  [xhdpi]=96
  [xxhdpi]=144
  [xxxhdpi]=192
)

for density in ${(k)android_sizes}; do
  size="${android_sizes[$density]}"
  target="$root/android/app/src/main/res/mipmap-$density"
  if [[ -d "$target" ]]; then
    for name in ic_launcher.png ic_launcher_round.png ic_launcher_foreground.png; do
      sips -s format png -z "$size" "$size" "$source_icon" --out "$target/$name" >/dev/null
    done
  fi
done

ios_target="$root/ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png"
if [[ -d "${ios_target:h}" ]]; then
  ios_icon_tmp="$(mktemp -d)"
  trap 'rm -rf "$ios_icon_tmp"' EXIT
  # App Store icons must be opaque and must not contain pre-rounded transparent
  # corners. Keep the shared artwork rounded elsewhere, but render the iOS
  # source with a full-bleed background before converting it to PNG.
  sed 's/<rect width="512" height="512" rx="124"/<rect width="512" height="512"/' \
    "$source_icon" > "$ios_icon_tmp/AppIcon.svg"
  sips -s format jpeg -z 1024 1024 "$ios_icon_tmp/AppIcon.svg" \
    --out "$ios_icon_tmp/AppIcon.jpg" >/dev/null
  sips -s format png "$ios_icon_tmp/AppIcon.jpg" --out "$ios_target" >/dev/null
fi

echo "Updated native launcher icons from icon.svg."
