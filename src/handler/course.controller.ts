import { Request, Response } from "express";
import { CourseService } from "../common/services/course.service";
import { ICourse } from "../common/db/models/course.model";

const courseService = new CourseService();

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

    export const getCourseById1 = async (req: Request<{id:string}>, res: Response) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
    };

    export const getCourseById = async (
        req: Request<{ id: string }>,
        res: Response
      ): Promise<void> => { 
        try {
          const { id } = req.params;
          const course = await courseService.getCourseById(id);
      
          if (!course) {
            res.status(404).json({ message: "Course not found" });
            return; 
          }
      
          res.status(200).json(course);
        } catch (error) {
          res.status(500).json({ message: (error as Error).message });
        }
      };

export const getAllCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
