import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '../course_dto_entity/course.entity';
import { CourseService } from '../service/course.service';
import { CourseController } from '../controller/course.controller';
import { Student } from '../../student/student_dto_entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController],
  exports: [CourseService],
})
export class CourseModule {}