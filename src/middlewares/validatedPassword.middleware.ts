import { NextFunction, Request, Response } from "express";
import * as bcryptjs from "bcryptjs";
import { TLoginUser } from "../interfaces/login.interface";
import { AppError } from "../errors/appError";

const validatedPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TLoginUser = req.body;

  const userLocal = res.locals.user;

  const validated: boolean = await bcryptjs.compare(
    userData.password,
    userLocal.password
  );

  if (!validated) {
    throw new AppError("Invalid credentials", 401);
  }

  return next();
};

export { validatedPasswordMiddleware };
