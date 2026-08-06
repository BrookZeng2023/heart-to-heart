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
  sips -s format png -z 1024 1024 "$source_icon" --out "$ios_target" >/dev/null
fi

echo "Updated native launcher icons from icon.svg."
