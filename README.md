# learn-nestjs
## Docker起動
```sh
docker compose up -d --build
```

止める場合は以下。
```sh
$ docker compose stop
```

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