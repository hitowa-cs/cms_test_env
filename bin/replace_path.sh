#!/bin/bash

find .vuepress/dist -name '*.html' | while read htmlfile; do
  sed -i .bak \
    -e "s|<img src=\"/|<img src=\"https://chamara8901.github.io/hitowacms/|g" \
    -e "s|<a href=\"/|<a href=\"https://chamara8901.github.io/hitowacms/|g" \
    -e "s|href=\"/assets/|href=\"https://chamara8901.github.io/hitowacms/assets/|g" \
    "${htmlfile}"
  rm -f "${htmlfile}.bak"
done


# echo hellow world

# find ~chamara/vpress/.vuepress/dist/lessons -name '*.html'

#  sed  's/ /g' add-2022.html 

# %rde% order

# sed -n '/title=/p' index.html

# href="/assets/

# find . -type f -print0 | xargs -0 sed -i -e "s|http://変更前URL|https://変更後URL|g"

# sed -e "s/hoge/http:\/\/www.aipo.com\//g" in.txt > out.txt

# sed -i -e 's/置換前/置換後/g' ファイル名

# 正規(regular) 表現(expression)
