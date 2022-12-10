import * as mysqlDriver from 'mysql2';
import {DataSource} from 'typeorm';
import { Task } from './entities/task.entity';

export const AppDataSource = new DataSource({
    driver: mysqlDriver,
    type: 'mysql',
    host: 'db-server',
    port: 3306,
    username: 'user',
    password: 'pwd',
    database: 'test',
    synchronize: true,
    logging: true,
    entities: [Task],
    subscribers: [],
    migrations: [],
})