yarn build
rm docs -rf
mv dist docs
printf "%s" "orbit.qwreey.kr" > docs/CNAME
