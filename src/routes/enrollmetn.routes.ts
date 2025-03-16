import { Router } from "express";
import { enrollStudent, getEnrollmentsByCourse, getEnrollmentsByStudent } from "../handler/enrollment.controller";

const router = Router();

router.post("/create", enrollStudent);
router.get("/student/:studentId", getEnrollmentsByStudent);
router.get("/course/:courseId", getEnrollmentsByCourse);

export default router;