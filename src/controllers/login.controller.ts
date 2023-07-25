import { Request, Response } from "express";
import { loginService } from "../services/login.service";

const loginController = async (req: Request, res: Response) => {
  const sessionUser = await loginService(res);
  return res.status(200).json(sessionUser);
};
export { loginController };
