import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import PrismaService from '../../database/database.service';
import { CreateCourseDto } from '../dto';

@Injectable()
export default class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  private get courseRepository() {
    return this.prisma.course;
  }

  findAll(): Promise<Course[]> {
    return this.courseRepository.findMany();
  }

  findOne(id: string): Promise<Course> {
    return this.courseRepository.findUniqueOrThrow({ where: { id } });
  }

  create(data: CreateCourseDto): Promise<Course> {
    return this.courseRepository.create({ data });
  }
}
