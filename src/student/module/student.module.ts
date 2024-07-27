import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../student_dto_entity/student.entity';
import { StudentService } from '../service/student.service';
import { StudentController } from '../controller/student.controller';
import { Course } from '../../course/course_dto_entity/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService],
})
export class StudentModule {}
