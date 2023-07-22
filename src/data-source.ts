// import "reflect-metadata"
import * as mysqlDriver from 'mysql2';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  driver: mysqlDriver,
  type: 'mysql',
  host: 'learn-nestjs-db-server',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'learn_nestjs',
  synchronize: true,
  logging: true,
  entities: ['src/entities/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: ['src/migrations/*.ts'],
});

// EntityMetadataNotFoundErrorの回避用
// AppDataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })
