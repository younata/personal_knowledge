#!/bin/bash

set -e

while IFS= read -r -d '' -u 9
do
    if [[ "${REPLY}" =~ ^.+\.md$ ]]; then
        LAST_MODIFY_DATE=`git --no-pager log -n 1 --pretty=format:%ci "${REPLY}"`
        printf "\n\nLast updated: ${LAST_MODIFY_DATE}" >> "${REPLY}"
    fi
done 9< <( find src -type f -exec printf '%s\0' {} + )

