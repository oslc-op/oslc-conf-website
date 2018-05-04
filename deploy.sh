#!/bin/bash

echo "Starting Deployment"

echo "Switch to Production"
git checkout production

echo "Updating Production branch"
git pull origin production

echo "Merging changes from Master"
git pull origin master

echo "Generate Hugo site"
hugo

echo "Commiting changes"
git add -A
git commit -m 'Updating Production Branch'

echo "Pushing changes to repository"
git push origin production

echo "Updating server code"
SCRIPT="cd ../var/www/oslcfest.org; git pull; exit"
ssh -A root@165.227.5.255 "${SCRIPT}"