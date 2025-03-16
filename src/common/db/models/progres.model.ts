import { Schema, model, Document, Types } from "mongoose";
import { COLLECTIONS } from "../../constants/collections";

export interface IProgress extends Document {
  studentId: Types.ObjectId;
  courseId: Types.ObjectId;
  completion: number; // % da
}

const ProgressSchema = new Schema<IProgress>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: COLLECTIONS.USER, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: COLLECTIONS.COURSE, required: true },
    completion: { type: Number, default: 0, min: 0, max: 100 },
  }
);

export const Progress = model<IProgress>(COLLECTIONS.PROGRESS, ProgressSchema);
