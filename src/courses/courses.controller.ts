import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body: string) {
    return body;
  }
}
