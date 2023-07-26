import { NextFunction, Request, Response } from "express";

const ensureIsOwnerContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.id;
  const idContact = req.params.id;

  return next();
};
