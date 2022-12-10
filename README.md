# learn-nestjs
## Docker起動
```sh
$ docker compose up -d --build
```

止める場合は以下。
```sh
$ docker compose stop
```

## GraphQL
http://localhost:3000/graphql

## ORM
マイグレーションファイルを作成。
```bash
$ yarn build
$ yarn typeorm migration:generate -d src/migrations -n create-task
```

マイグレーションファイルを実行。
```bash
$ yarn build
$ yarn typeorm migration:run
```

## Typeorm
### エンティティの作成
```
$ yarn typeorm entity:create ./src/entities/{Entitiy Name}
```

### マイグレーションの作成
```
$ yarn typeorm migration:generate -d src/data-source.ts src/migrations/{Migration Name}
```

### マイグレーションを実行
```
$ yarn migration:run
```