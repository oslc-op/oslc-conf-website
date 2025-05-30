#!/usr/bin/env bash

echo "Starting Deployment"

git checkout main
rm -rf public/
git pull origin main
git push origin main

echo "Switch to Production"
git checkout production

echo "Updating Production branch"
git pull --rebase=false  origin production

echo "Merging changes from main"
git pull --rebase=false --no-edit -s recursive -X theirs origin main

echo "Generate Hugo site"
rm -rf public/
hugo -b http://oslcfest.org/ -t oslc-conference

echo "Commiting changes"
git add -A
git commit -m 'Updating Production Branch'

echo "Pushing changes to repository"
git push origin production

echo "Updating server code"
SCRIPT="cd ../var/www/oslc-conf-website; git pull; exit"
ssh -A -p "${2:-22}" "${1}" "${SCRIPT}"

echo "Switching to main"
git checkout main
