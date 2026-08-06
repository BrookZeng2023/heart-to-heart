#!/bin/zsh

set -euo pipefail

root="${0:A:h:h}"
iconset="$root/build/HeartToHeart.iconset"

rm -rf "$iconset"
mkdir -p "$iconset"

function make_icon() {
  local pixels="$1"
  local name="$2"
  sips -s format png -z "$pixels" "$pixels" "$root/icon.svg" --out "$iconset/$name" >/dev/null
}

make_icon 16 "icon_16x16.png"
make_icon 32 "icon_16x16@2x.png"
make_icon 32 "icon_32x32.png"
make_icon 64 "icon_32x32@2x.png"
make_icon 128 "icon_128x128.png"
make_icon 256 "icon_128x128@2x.png"
make_icon 256 "icon_256x256.png"
make_icon 512 "icon_256x256@2x.png"
make_icon 512 "icon_512x512.png"
make_icon 1024 "icon_512x512@2x.png"

iconutil --convert icns "$iconset" --output "$root/build/icon.icns"
rm -rf "$iconset"
