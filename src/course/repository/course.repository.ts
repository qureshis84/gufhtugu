import { Injectable } from '@nestjs/common';
import { Course, Lecture, Module } from '@prisma/client';
import PrismaService from '../../database/database.service';
import {
  CreateCourseDto,
  CreateCourseModuleDto,
  CreateLectureDto,
} from '../dto';

@Injectable()
export default class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  private get courseRepository() {
    return this.prisma.course;
  }

  private get moduleRepository() {
    return this.prisma.module;
  }

  private get lectureRepository() {
    return this.prisma.lecture;
  }

  findAll(): Promise<Course[]> {
    return this.courseRepository.findMany();
  }

  findOne(id: string): Promise<Course> {
    return this.courseRepository.findUniqueOrThrow({
      where: { id },
      include: {
        modules: { include: { lectures: true, _count: true } },
        _count: true,
      },
    });
  }

  create(data: CreateCourseDto): Promise<Course> {
    return this.courseRepository.create({ data });
  }

  createCourseModule(data: CreateCourseModuleDto): Promise<Module> {
    return this.moduleRepository.create({ data });
  }

  createLecture(data: CreateLectureDto): Promise<Lecture> {
    return this.lectureRepository.create({ data });
  }
}
