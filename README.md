# deepstream-test

## How to use:
Just start your deepstream server and run `index.js`.

To create records, send a POST request like the one below:

```shell
curl --request POST \
  --url http://localhost:8080/ \
  --header 'content-type: application/json' \
  --data '{
  "body": [
    {
      "topic": "record",
      "action": "write",
      "recordName": "test/johndoe",
      "path": "age",
      "data": 21
    }
  ]
}'
```