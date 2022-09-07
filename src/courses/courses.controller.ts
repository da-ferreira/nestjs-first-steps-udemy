import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  // Recebendo apenas o 'name' do JSON
  create(@Body('name') body: string) {
    return body;
  }
}
