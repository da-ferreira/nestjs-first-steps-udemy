import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCoursesTagsTable1664648694090 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE IF NOT EXISTS public.courses_tags(
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
        course_id uuid,
        tag_id uuid,
        CONSTRAINT courses_tags_pkey PRIMARY KEY (id),
        CONSTRAINT "course_id_courses_FK" FOREIGN KEY (course_id)
          REFERENCES public.courses (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION,
        CONSTRAINT "tag_id_tags_FK" FOREIGN KEY (tag_id)
          REFERENCES public.tags (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION
      )
      
      TABLESPACE pg_default;
      
      ALTER TABLE IF EXISTS public.courses_tags OWNER to postgres;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
