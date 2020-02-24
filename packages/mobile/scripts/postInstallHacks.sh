#!/bin/sh

# cp ./scripts/metro/getAssets.js ./node_modules/metro/src/DeltaBundler/Serializers/getAssets.js
npx jetify

cd ios/

if [ $(uname -s) = 'Darwin' ]; then
  pod install
else echo 'Skipping pod installation since we are not Mac OS'; fi

cd -
