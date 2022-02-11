import {MigrationInterface, QueryRunner} from "typeorm";

export class Createuser1644574605926 implements MigrationInterface {
    name = 'Createuser1644574605926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "username" character varying(255) NOT NULL, "email" character varying NOT NULL, "email_verified" boolean NOT NULL, "avatar_url" character varying, "provider" character varying, "provider_user_id" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
