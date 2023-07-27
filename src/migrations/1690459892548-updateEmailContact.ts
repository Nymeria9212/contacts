import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEmailContact1690459892548 implements MigrationInterface {
    name = 'UpdateEmailContact1690459892548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
    }

}
