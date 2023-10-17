import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { CreateCourseDto } from './dto';
import CourseRepository from './repository/course.repository';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  findAll(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }

  findOne(id: string): Promise<Course> {
    return this.courseRepository.findOne(id);
  }

  create(body: CreateCourseDto) {
    return this.courseRepository.create(body);
  }
}
