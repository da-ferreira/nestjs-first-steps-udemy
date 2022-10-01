import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCoursesTable1664639482855 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS public.courses
      (
          id uuid NOT NULL,
          name character varying COLLATE pg_catalog."default",
          description character varying COLLATE pg_catalog."default",
          created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT courses_pkey PRIMARY KEY (id)
      )
      
      TABLESPACE pg_default;
      
      ALTER TABLE IF EXISTS public.courses
          OWNER to postgres;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
