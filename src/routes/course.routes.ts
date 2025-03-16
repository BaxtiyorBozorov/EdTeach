import express from 'express'
import { createCourse, getAllCourses, getCourseById } from '../handler/course.controller'

const  router = express.Router()


router.post("/create" , createCourse)
router.get("/" , getAllCourses)
router.get("/:id" , getCourseById)

export default router