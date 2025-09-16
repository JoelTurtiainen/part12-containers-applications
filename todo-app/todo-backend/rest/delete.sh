TODO_ID=68c3e7bda54f983c91be4860

curl -s -i -X DELETE \
    "http://localhost:3000/todos/${TODO_ID}" \
    -H 'Content-Type: application/json' \
