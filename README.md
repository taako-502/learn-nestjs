# learn-nestjs
## Docker起動
```bash
$ docker compose up -d --build
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
$ yarn migration:run
```