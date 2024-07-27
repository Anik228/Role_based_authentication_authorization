import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../course_dto_entity/course.entity';
import { CreateCourseDTO } from '../course_dto_entity/create-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async createCourse(createCourseDTO: CreateCourseDTO): Promise<Course> {
    const course = this.courseRepository.create(createCourseDTO);
    return await this.courseRepository.save(course);
  }

  async findCourseById(id: number): Promise<Course> {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['students'],
    });
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  async findAllCourses(): Promise<Course[]> {
    return await this.courseRepository.find({ relations: ['students'] });
  }
}