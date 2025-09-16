TODO_ID=68c7b4a103cd90d556fa3351
curl -s -i -X GET \
    "http://localhost:3000/todos/${TODO_ID}" \
    -H 'Content-Type: application/json' \
    -d '{"text":"test todo","done":false}' \
