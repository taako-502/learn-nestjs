# learn-nestjs
## Docker起動
```bash
$ docker compose up -d
```

止める場合は以下。
```bash
$ docker compose stop
```

## GraphQL
http://localhost:3000/graphql

## Typeorm
### エンティティの作成
```bash
$ yarn typeorm entity:create ./src/entities/{Entitiy Name}
```

### マイグレーションの作成
```bash
$ yarn typeorm migration:generate -d src/data-source.ts src/migrations/{Migration Name}
```

### マイグレーションを実行
```bash
$ yarn typeorm migration:run -d src/data-source.ts
```

## curlによる動作確認
`curl path`で実行。
`-X` でhttpリクエストを指定する。
```
# 例）url http://localhost:3000/hoge -X GET
```

```
$ curl http://localhost:3000/task -X POST -d "title=ジムに行く&due_date=2021-10-05"
```
