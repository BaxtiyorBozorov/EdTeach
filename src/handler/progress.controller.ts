import { Request, Response } from "express";
import { ProgressService } from "../common/services/progress.service";

const progressService = new ProgressService();

export const updateProgress = async (req: Request, res: Response) => {
  try {
    const { studentId, courseId, completion } = req.body;
    console.log(req.body);
    
    const progress = await progressService.updateProgress(studentId, courseId, completion);
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.getProgress(req.params.studentId, req.params.courseId);
    if (!progress){
        res.status(404).json({ message: "Progress not found" });
        return
    } 
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getCourseProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.getCourseProgress(req.params.courseId);
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
