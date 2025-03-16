import { Schema, model, Document, Types } from "mongoose";
import { COLLECTIONS } from "../../constants/collections";

export interface ICourse extends Document {
  title: string;
  description?: string;
  price: number;
  teacherId: Types.ObjectId;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, default: 0 },
    teacherId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Course = model<ICourse>(COLLECTIONS.COURSE, CourseSchema);
