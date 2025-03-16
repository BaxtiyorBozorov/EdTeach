import { Schema, model, Document, Types } from "mongoose";
import { COLLECTIONS } from "../../constants/collections";

export interface IEnrollment extends Document {
  studentId: Types.ObjectId;
  courseId: Types.ObjectId;
  enrolledAt: Date;
}

const EnrollmentSchema = new Schema<IEnrollment>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: COLLECTIONS.USER, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: COLLECTIONS.COURSE, required: true },
    enrolledAt: { type: Date, default: Date.now },
  }
);

export const Enrollment = model<IEnrollment>(COLLECTIONS.ENROLLMENT, EnrollmentSchema);
