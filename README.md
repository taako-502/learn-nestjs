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
```bash
# 例）
# タスクを登録
$ curl http://localhost:3000/task -X POST -d "title=ジムに行く&due_date=2021-10-05"
# タスクを取得
$ curl http://localhost:3000/hoge -X GET
```

## Prismaについて
### 状況
中途半端に導入してしまったが、うまく動かないので、実際にはTypeORMが動き続けている。
Prismaに関しては気にしないようにしてほしい。

### データベースに権限をつける必要がある
管理者（たぶんroot/password）でログインして、以下を実行する。
```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;
GRANT CREATE, ALTER, DROP ON *.* TO 'user'@'%';
FLUSH PRIVILEGES;
```
※ `user` と `password` は任意の値でOK