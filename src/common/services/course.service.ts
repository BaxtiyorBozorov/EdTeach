import { Course, ICourse } from "../db/models/course.model";
import { CommonErrorCodes, HttpErrorCodes } from "../exeption/error.codes";
import { CommonException } from "../exeption/exeption";

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

  // async deleteCourse(id: string): Promise<ICourse | null> {
  //   return await Course.findByIdAndDelete(id);
  // }
  async updateCourse(id: string, data: Partial<ICourse>): Promise<ICourse | null> {
    return await Course.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCourse(id: string ): Promise<ICourse | null>{
    const course = await Course.findById(id);
    if (!course) {
      throw new CommonException(CommonErrorCodes.NotFound,'Course not found',{},HttpErrorCodes.NotFound);
    }
    await Course.deleteOne({ _id: id });
    return course;
  }

}
