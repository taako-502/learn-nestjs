import { MigrationInterface, QueryRunner } from 'typeorm';

export class bookAndTask1670695316613 implements MigrationInterface {
  name = 'bookAndTask1670695316613';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`task\` (\`task_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(20) NOT NULL, \`due_date\` date NOT NULL, \`status\` tinyint(1) NOT NULL DEFAULT '1', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`task_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(30) NOT NULL, \`author\` varchar(255) NOT NULL, \`price\` int UNSIGNED NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`book\``);
    await queryRunner.query(`DROP TABLE \`task\``);
  }
}
