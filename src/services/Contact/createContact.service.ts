import { Repository } from "typeorm";
import { TContactRequest } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entitie";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/appError";
import { TContact } from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schemas";

const createContactService = async (
  userid: number,
  data: TContactRequest
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({ where: { id: userid } });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user: findUser,
  });
  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
