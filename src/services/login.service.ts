import { Response } from "express";
import { TLoginUser } from "../interfaces/login.interface";
import { sign } from "jsonwebtoken";

const loginService = (res: Response) => {
  const user = res.locals.user;
  const token = sign({ email: user.email }, String(process.env.SECRET_KEY!), {
    expiresIn: "1d",
    subject: String(user.id),
  });

  return { token };
};

export { loginService };
