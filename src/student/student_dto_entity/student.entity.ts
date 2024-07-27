import { Entity, PrimaryGeneratedColumn, Column, ManyToMany,JoinTable } from 'typeorm';
import { Course } from '../../course/course_dto_entity/course.entity';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentName: string;

  @ManyToMany(() => Course, course => course.students, { cascade: true })
  @JoinTable({
    name: 'student_course',
    joinColumn: { name: 'student_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'course_id', referencedColumnName: 'id' },
  })
  courses: Course[];
}