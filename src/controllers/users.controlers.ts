import { Request, Response } from "express";
import { createUserService } from "../services/User/createUser.service";
import { readProfileService } from "../services/User/readProfile.service";
import { updateUserService } from "../services/User/updateUser.service";
import { TUserResponse } from "../interfaces/user.interface";
import { deleteUserService } from "../services/User/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const getUserController = async (req: Request, res: Response) => {
  const userId = res.locals.id;
  const readUser = await readProfileService(userId);
  return res.status(200).json(readUser);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.id;
  const data = req.body;
  const updateUser = await updateUserService(data, userId);
  return res.status(200).json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = res.locals.id;
  const deleteUser = await deleteUserService(userId);
  return res.status(204).send();
};

export {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
};
