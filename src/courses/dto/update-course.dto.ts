import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

// O PartialType faz com que a validação do updateDTO seja parte do que tem
// no createDTO, ou seja, pode enviar apenas alguns dados do createDTO,
// mantendo as validações já colocadas
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
