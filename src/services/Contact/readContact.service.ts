import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/appError";
import { contactSchema } from "../../schemas/contact.schemas";

const readContactService = async (userId: number, id: number) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const findContact = user.contacts.find((contact) => contact.id === id);
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  return contactSchema.parse(findContact);
};
export { readContactService };
