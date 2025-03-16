import { Request, Response } from "express";
import { EnrollmentService } from "../common/services/enrollment.service";
import { log } from "node:console";

const enrollmentService = new EnrollmentService();

export const enrollStudent = async (req: Request, res: Response) => {
  try {
    const enrollment = await enrollmentService.enrollStudent(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getEnrollmentsByStudent = async (req: Request, res: Response) => {
  try {
    const enrollments = await enrollmentService.getEnrollmentsByStudent(req.params.studentId);
    console.log(enrollments);
    
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getEnrollmentsByCourse = async (req: Request, res: Response) => {
  try {
    const enrollments = await enrollmentService.getEnrollmentsByCourse(req.params.courseId);
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
