import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `Curso #${id}`;
  }
}
