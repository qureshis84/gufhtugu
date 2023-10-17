import { CourseLevel, Prisma } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export default class CreateCourseDto implements Prisma.CourseCreateInput {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsNotEmpty({ message: 'Synopsis is required' })
  synopsis: string;

  @IsNotEmpty({ message: 'Takeaways is required' })
  takeaways: string[];
  //   takeaways: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;

  @IsNotEmpty({ message: 'Image is required' })
  imageURL: string;

  @IsNotEmpty({ message: 'Level is required' })
  @IsEnum(CourseLevel, { message: 'Invalid level' })
  level: CourseLevel;
}
