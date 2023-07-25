import { NextFunction, Request, Response } from "express";
import { TLoginUser } from "../interfaces/login.interface";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entitie";
import { AppError } from "../errors/appError";

const ensureUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TLoginUser = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { email: userData.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  res.locals.user = user;

  return next();
};

export default ensureUserLogin;
