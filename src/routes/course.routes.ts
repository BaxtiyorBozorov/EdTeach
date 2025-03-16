import express from 'express'
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from '../handler/course.controller'

const  router = express.Router()


router.post("/create" , createCourse)
router.get("/" , getAllCourses)
router.get("/:id" , getCourseById)
router.put("/" , updateCourse)
router.delete("/:id" , deleteCourse)

export default router