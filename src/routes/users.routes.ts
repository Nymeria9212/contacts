import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controlers";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { userSchemaRequest } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  validatedDataMiddleware(userSchemaRequest),
  createUserController
);
userRoutes.get("", getUserController);
userRoutes.patch("", updateUserController);
userRoutes.delete("", deleteUserController);
export { userRoutes };
