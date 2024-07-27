import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from '../../student_course/student_course_dto_entity/student-course.entity';
import { StudentCourseService } from '../service/student_course.service';
import { StudentCourseController } from '../controller/student_course.controller';
import { Student } from '../../student/student_dto_entity/student.entity';
import { Course } from '../../course/course_dto_entity/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourse, Student, Course])],
  providers: [StudentCourseService],
  controllers: [StudentCourseController],
})
export class StudentCourseModule {}