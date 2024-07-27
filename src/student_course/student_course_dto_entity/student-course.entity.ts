import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../../student/student_dto_entity/student.entity';
import { Course } from '../../course/course_dto_entity/course.entity';

@Entity('student_course')
export class StudentCourse {
  @PrimaryColumn({ name: 'student_id' })
  studentId: number;

  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  @ManyToOne(() => Student, student => student.courses, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: Student;

  @ManyToOne(() => Course, course => course.students, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  course: Course;
}
