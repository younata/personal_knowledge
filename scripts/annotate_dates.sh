#!/bin/bash

set -e

while IFS= read -r -d '' -u 9
do
    if [[ "${REPLY}" =~ ^.+\.md$ ]]; then
        LAST_MODIFY_DATE=`git --no-pager log -n 1 --pretty=format:%ci "${REPLY}"`
        LAST_HASH=`git --no-pager log -n 1 --pretty=format:%H "${REPLY}"`
        printf "\n\nLast updated: [${LAST_MODIFY_DATE}](https://github.com/younata/personal_knowledge/commit/${LAST_HASH})" >> "${REPLY}"
    fi
done 9< <( find src -type f -exec printf '%s\0' {} + )
