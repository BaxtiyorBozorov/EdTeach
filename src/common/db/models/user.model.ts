import { Schema, model, Document, Collection } from "mongoose";
import { COLLECTIONS } from "../../constants/collections";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: "student" | "teacher";
}

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "teacher" , "admin"], required: true },
  },
  { timestamps: true }
);

export const User = model<IUser>(COLLECTIONS.USER, UserSchema);
