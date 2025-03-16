import express from 'express'

import { getCourseProgress, getProgress, updateProgress } from '../handler/progress.controller'

const router = express.Router()



router.post("/", updateProgress);
router.get("/:studentId/:courseId", getProgress);
router.get("/course/:courseId", getCourseProgress);

export default router;
