import { Injectable } from '@nestjs/common';
import { Course, Module } from '@prisma/client';
import PrismaService from '../../database/database.service';
import { CreateCourseDto, CreateCourseModuleDto } from '../dto';

@Injectable()
export default class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  private get courseRepository() {
    return this.prisma.course;
  }

  private get moduleRepository() {
    return this.prisma.module;
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

  createCourseModule(data: CreateCourseModuleDto): Promise<Module> {
    return this.moduleRepository.create({ data });
  }
}
