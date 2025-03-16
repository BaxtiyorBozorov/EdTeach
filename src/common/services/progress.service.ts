import { Progress, IProgress } from "../db/models/progres.model";

export class ProgressService {
  async updateProgress(studentId: string, courseId: string, completion: number): Promise<IProgress | null> {
    return await Progress.findOneAndUpdate(
      { studentId: studentId, courseId: courseId },
      { completion },
      { new: true, upsert: true }
    );
  }

  async getProgress(studentId: string, courseId: string): Promise<IProgress | null> {
    return await Progress.findOne({ studentId: studentId, courseId: courseId });
  }

  async getCourseProgress(courseId: string): Promise<IProgress[]> {
    return await Progress.find({ course: courseId }).populate("studentId" , "name email");
  }
}
