import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTagsTable1664641280079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS public.tags (
            id uuid NOT NULL,
            name character varying COLLATE pg_catalog."default",
            created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT tags_pkey PRIMARY KEY (id)
        )
        TABLESPACE pg_default;
        ALTER TABLE IF EXISTS public.tags OWNER to postgres;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
