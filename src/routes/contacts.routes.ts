import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  readContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import {
  contactSchemaPartial,
  contactSchemaRequest,
} from "../schemas/contact.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validatedDataMiddleware(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", listContactController);
contactsRoutes.get("/:id", readContactController);
contactsRoutes.patch(
  "/:id",
  validatedDataMiddleware(contactSchemaPartial),
  updateContactController
);
contactsRoutes.delete("/:id", deleteContactController);

export { contactsRoutes };
