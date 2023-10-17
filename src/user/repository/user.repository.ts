import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import PrismaService from '../../database/database.service';
import { CreateUserDto } from '../dto';

@Injectable()
export default class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private get userRepository() {
    return this.prisma.user;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findUniqueOrThrow({ where: { id } });
  }

  create(data: CreateUserDto): Promise<User> {
    return this.userRepository.create({ data });
  }
}
