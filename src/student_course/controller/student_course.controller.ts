import { Controller, Post, Body } from '@nestjs/common';
import { StudentCourseService } from '../service/student_course.service';
import { CreateStudentCourseDTO } from '../student_course_dto_entity/create-student-course.dto';

@Controller('student-course')
export class StudentCourseController {
  constructor(private readonly studentCourseService: StudentCourseService) {}

  @Post('give-courses')
  async createStudentCourse(@Body() createStudentCourseDTO: CreateStudentCourseDTO) {
    await this.studentCourseService.createStudentCourse(createStudentCourseDTO);
  }
}
