import { Request, Response } from "express";
import { createContactService } from "../services/Contact/createContact.service";
import { listContactsService } from "../services/Contact/listContact.service";
import { updateContactService } from "../services/Contact/updateContact.service";
import { deleteContactService } from "../services/Contact/deleteContact.service";
import { readContactService } from "../services/Contact/readContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userid = res.locals.id;
  const data = req.body;

  const newContact = await createContactService(userid, data);
  return res.status(201).json(newContact);
};
const readContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userid = res.locals.id;
  const contactId: number = parseInt(req.params.id);
  const contact = await readContactService(userid, contactId);
  return res.status(200).json(contact);
};
const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userid: number = parseInt(res.locals.id);
  const listContacts = await listContactsService(userid);
  return res.status(200).json(listContacts);
};
const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  const data = req.body;

  const updateContact = await updateContactService(contactId, data);

  return res.status(200).json(updateContact);
};
const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  readContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
