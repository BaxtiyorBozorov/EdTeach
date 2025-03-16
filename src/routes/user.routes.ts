import express from 'express'
import { createUser, getUserById, getAllUsers, deleteUser, updateUser } from '../handler/user.controller'

const router = express.Router()


router.post("/create", createUser);
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.put("/", updateUser);

export default router;
