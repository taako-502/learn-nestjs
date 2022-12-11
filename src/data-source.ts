import * as mysqlDriver from 'mysql2';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    driver: mysqlDriver,
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'user',
    password: 'pwd',
    database: 'test',
    synchronize: true,
    logging: true,
    entities: ['src/entities/*.entity{.ts,.js}'],
    subscribers: [],
    migrations: ['src/migrations/*.ts'],
})