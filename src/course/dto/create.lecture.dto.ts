import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsUUID } from 'class-validator';

export default class CreateLectureDto
  implements Prisma.LectureUncheckedCreateInput
{
  @IsNotEmpty()
  @IsUUID()
  moduleId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
