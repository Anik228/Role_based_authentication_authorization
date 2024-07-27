import { Controller, Post, Body,Get } from '@nestjs/common';
import { StudentService } from '../service/student.service';
import { CreateStudentDTO } from '../student_dto_entity/create-student.dto';
import { StudentCourseService } from 'src/student_course/service/student_course.service';
import { CreateStudentCourseDTO } from 'src/student_course/student_course_dto_entity/create-student-course.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('add-student')
  async createStudent(@Body() createStudentDTO: CreateStudentDTO) {
    return await this.studentService.createStudent(createStudentDTO);
  }

  @Get('all-student-with-course')
  async getAllStudents() {
    const students = await this.studentService.findAllStudents();
    return students.map(student => ({
      id: student.id,
      name: student.studentName,
      courses: student.courses.map(course => ({
        id: course.id,
        name: course.courseName,
      })),
    }));
  }
}