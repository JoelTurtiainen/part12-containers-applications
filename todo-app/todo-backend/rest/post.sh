curl -s -i -X POST \
    'http://localhost:3000/todos/' \
    -H 'Content-Type: application/json' \
    -d '{"text":"test todo","done":false}' \
