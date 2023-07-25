import { Router } from "express";
import ensureUserLogin from "../middlewares/ensureUserLogin.middleware";
import { loginController } from "../controllers/login.controller";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { loginSchemaRequest } from "../schemas/login.schemas";
import { validatedPasswordMiddleware } from "../middlewares/validatedPassword.middleware";

const loginRoute = Router();
loginRoute.post(
  "",
  validatedDataMiddleware(loginSchemaRequest),
  ensureUserLogin,
  validatedPasswordMiddleware,
  loginController
);

export default loginRoute;
