import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsUUID } from 'class-validator';

export default class CreateCourseModuleDto
  implements Prisma.ModuleUncheckedCreateInput
{
  @IsNotEmpty()
  @IsUUID()
  courseId: string;

  @IsNotEmpty()
  title: string;
}
