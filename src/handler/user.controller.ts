import { Request, Response } from "express";
import { UserService } from "../common/services/user.service";
import { CommonException } from "../common/exeption/exeption";

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    await userService.updateUser(req.body._id, req.body);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    if(error instanceof CommonException){
      res.status(error.statusCode).json(error);
    }else
    res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);

    if(error instanceof CommonException){
        res.status(error.statusCode).json(error);
    }else
    res.status(500).json({ message: (error as Error).message });
  }
};
