import { Prisma } from '@prisma/client';
import { IsEmail } from 'class-validator';

export default class CreateUserDto implements Prisma.UserCreateInput {
  @IsEmail()
  email: string;
}
