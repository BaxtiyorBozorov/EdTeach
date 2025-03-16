import { Course, ICourse } from "../db/models/course.model";

export class CourseService {
  async createCourse(data: Partial<ICourse>): Promise<ICourse> {
    return await Course.create(data);
  }

  async getCourseById(id: string): Promise<ICourse | null> {
    return await Course.findById(id);
  }

  async getAllCourses(): Promise<ICourse[]> {
    return await Course.find();
  }

  async deleteCourse(id: string): Promise<ICourse | null> {
    return await Course.findByIdAndDelete(id);
  }
}
