#!/bin/bash

if [ "$1" == "mac" ]; then
    cd ~/Documents/GitHub/avp
else
    cd ~/avhc
fi

git status
git pull
yarn global add firebase-tools @vue/cli @vue/cli-service-global
rm -rf public/node_modules functions/node_modules
cd functions
yarn install
cd ../public
yarn install
yarn build
cd ..
firebase deploy
