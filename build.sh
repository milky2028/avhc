#!/bin/bash

cd ~/Documents/GitHub/avp
npm i -g firebase-tools @vue/cli @vue/cli-service-global
rm -rf public/node_modules functions/node_modules
cd functions
yarn
cd ../public
yarn
yarn build
cd ..
firebase deploy
