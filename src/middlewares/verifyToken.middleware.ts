import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { verify } from "jsonwebtoken";

const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  let authorization: string | undefined = req.headers.authorization;
  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }
  const token = authorization.split(" ")[1];

  verify(token, String(process.env.SECRET_KEY!), (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    res.locals.id = decoded.sub;
  });

  return next();
};

export { verifyTokenMiddleware };
