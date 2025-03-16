import { Enrollment, IEnrollment } from "../db/models/enrollment.model";

export class EnrollmentService {
  async enrollStudent(data: Partial<IEnrollment>): Promise<IEnrollment> {
    return await Enrollment.create(data);
  }

  async getEnrollmentsByStudent(studentId: string): Promise<IEnrollment[]> {
    return await Enrollment.find({ studentId: studentId }).populate("courseId" , "title price description ");
  }

  async getEnrollmentsByCourse(courseId: string): Promise<IEnrollment[]> {
    return await Enrollment.find({ courseId: courseId }).populate("studentId" , "name email");
  }
}


