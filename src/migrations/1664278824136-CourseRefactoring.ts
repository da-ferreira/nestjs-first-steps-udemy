import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1664278824136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "courses" RENAME COLUMN "description" TO "desc"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "courses" RENAME COLUMN "desc" TO "description"`);
  }
}
