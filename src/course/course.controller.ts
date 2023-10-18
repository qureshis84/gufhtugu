import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CourseService } from './course.service';
import {
  CreateCourseDto,
  CreateCourseModuleDto,
  CreateLectureDto,
} from './dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCourseDto) {
    return this.courseService.create(body);
  }

  @Post(`module`)
  createCourseModule(@Body() body: CreateCourseModuleDto) {
    return this.courseService.createCourseModule(body);
  }

  @Post(`module/lecture`)
  createCourseLecture(@Body() body: CreateLectureDto) {
    return this.courseService.createCourseLecture(body);
  }
}
