import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  // @Get()
  @Get('list')
  findAll() {
    return 'Listagem de cursos';
  }
}
