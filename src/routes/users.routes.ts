import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controlers";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { userSchemaRequest } from "../schemas/user.schemas";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  validatedDataMiddleware(userSchemaRequest),
  createUserController
);
userRoutes.get("/profile", verifyTokenMiddleware, getUserController);
userRoutes.patch("/profile", verifyTokenMiddleware, updateUserController);
userRoutes.delete("/profile", verifyTokenMiddleware, deleteUserController);
export { userRoutes };
