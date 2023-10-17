import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [DatabaseModule, UserModule, CourseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
