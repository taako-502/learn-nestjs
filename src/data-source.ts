// import "reflect-metadata"
import * as mysqlDriver from 'mysql2';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  driver: mysqlDriver,
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
