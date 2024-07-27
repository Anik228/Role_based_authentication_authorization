import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCourse } from '../student_course_dto_entity/student-course.entity';
import { CreateStudentCourseDTO } from '../student_course_dto_entity/create-student-course.dto';
import { StudentService } from '../../student/service/student.service';
import { CourseService } from '../../course/service/course.service';
import { Student } from 'src/student/student_dto_entity/student.entity';
import { Course } from 'src/course/course_dto_entity/course.entity';

@Injectable()
export class StudentCourseService {
  constructor(
    @InjectRepository(StudentCourse)
    private readonly studentCourseRepository: Repository<StudentCourse>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async createStudentCourse(createStudentCourseDTO: CreateStudentCourseDTO): Promise<StudentCourse> {
    const student = await this.studentRepository.findOne({ where: { id: createStudentCourseDTO.studentId } });
    if (!student) throw new NotFoundException('Student not found');

    const course = await this.courseRepository.findOne({ where: { id: createStudentCourseDTO.courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const studentCourse = this.studentCourseRepository.create(createStudentCourseDTO);
    return await this.studentCourseRepository.save(studentCourse);
  }
}