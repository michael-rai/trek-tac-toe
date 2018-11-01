curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
