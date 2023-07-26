import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import { AppError } from "../errors/appError";

const ensureIsOwnerContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.id;
  const idContact: number = parseInt(req.params.id);

  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: { id: idContact },
    relations: { user: true },
  });
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  if (contact.user.id != userId) {
    return res.status(404).json({ message: "You don't have permissions" });
  }

  return next();
};

export { ensureIsOwnerContactMiddleware };
