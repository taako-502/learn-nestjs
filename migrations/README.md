# migration
以下のコマンドでmigrationファイルを作成する。
```bash
$ node_modules/.bin/sequelize model:create --name {テーブル名} --underscored --attributes name:string,birth:date,country_code:integer
```

migrateする
```bash
$ node_modules/.bin/sequelize db:migrate

# 環境を指定する場合
$ node_modules/.bin/sequelize db:migrate --env development
```

ロールバックする
```bash
node_modules/.bin/sequelize db:migrate:undo --env development
```