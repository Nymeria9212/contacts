import { Request, Response } from "express";
import { createUserService } from "../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const getUserController = async (req: Request, res: Response) => {
  return res.json("get funcionando");
};

const updateUserController = async (req: Request, res: Response) => {
  return res.json("patch funcionando");
};

const deleteUserController = async (req: Request, res: Response) => {
  return res.json("delete funcionando");
};

export {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
};
