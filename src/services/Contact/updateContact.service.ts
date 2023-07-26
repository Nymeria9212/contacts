import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/appError";
import { TContact, TContactUpdate } from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  idContact: number,
  data: TContactUpdate
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id: idContact });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }
  const newContact = contactRepository.create({
    ...findContact,
    ...data,
  });
  await contactRepository.save(newContact);

  return contactSchema.parse(newContact);
};
export { updateContactService };
