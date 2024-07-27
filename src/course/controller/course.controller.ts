import { Controller, Post, Body,Get } from '@nestjs/common';
import { CourseService } from '../service/course.service';
import { CreateCourseDTO } from '../course_dto_entity/create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('add-course')
  async createCourse(@Body() createCourseDTO: CreateCourseDTO) {
    return await this.courseService.createCourse(createCourseDTO);
  }

  @Get('all-course-with-student')
  async getAllCourses() {
    const courses = await this.courseService.findAllCourses();
    return courses.map(course => ({
      id: course.id,
      name: course.courseName,
      students: course.students.map(student => ({
        id: student.id,
        name: student.studentName,
      })),
    }));
  }
}