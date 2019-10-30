#!/bin/sh
currentpath=$PWD
cd ${currentpath}/frontend
yarn build

cd ${currentpath}/backend
pm2 stop pickpong
pm2 delete pickpong
export NODE_ENV=production
pm2 start --name "pickpong" yarn -- start
