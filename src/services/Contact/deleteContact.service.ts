import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/appError";

const deleteContactService = async (contactId: number) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOneBy({ id: contactId });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.remove(findContact);
};
export { deleteContactService };
