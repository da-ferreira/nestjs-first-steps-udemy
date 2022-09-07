import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['nestjs', 'nodejs', 'ts', 'js', 'api', 'database'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findById(id: string) {
    return this.courses.find((course: Course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    return this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCourse !== -1) {
      this.courses[indexCourse] = updateCourseDto;
    }
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCourse !== -1) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
