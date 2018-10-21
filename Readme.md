# Server rest
Simple rest server that serves collections by Id

## Configure
Set initial collection data in `data/collection.json`.

## Start
```sh
yarn start [PORT]
```
_PORT: server listening port. Default: 8080_

## Use
It serves a simple REST server listening `/collection/<collectionId>/`. `<collectionId>` can be any string, used to allow multiple collections being served. For example:

`GET /collection/games`<br>
`GET /collection/categories`<br>
`GET /collection/players`

It supports GET, POST, PUT and DELETE verbs as in standard REST architechture.

## License

See [LICENSE](./LICENSE) file.

