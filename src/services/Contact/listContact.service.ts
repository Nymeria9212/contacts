import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/appError";

const listContactsService = async (userId: number) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user.contacts;
};

export { listContactsService };
