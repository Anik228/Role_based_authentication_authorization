import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../student_dto_entity/student.entity';
import { CreateStudentDTO } from '../student_dto_entity/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(createStudentDTO: CreateStudentDTO): Promise<Student> {
    const student = this.studentRepository.create(createStudentDTO);
    return await this.studentRepository.save(student);
  }

  async findStudentById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['courses'],
    });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  async findAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find({ relations: ['courses'] });
  }
}