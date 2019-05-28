#!/bin/bash

cd ~/Documents/GitHub/avhc
git status
git pull
yarn global add firebase-tools @vue/cli @vue/cli-service-global typescript
rm -rf public/node_modules functions/node_modules build/node-scripts/node_modules
cd functions
yarn install
cd ../public
yarn install
yarn build
cd ..
firebase deploy
