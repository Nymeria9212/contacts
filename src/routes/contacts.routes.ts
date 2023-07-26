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
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { ensureIsOwnerContactMiddleware } from "../middlewares/ensureIsOwnerContact.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validatedDataMiddleware(contactSchemaRequest),
  verifyTokenMiddleware,
  createContactController
);
contactsRoutes.get(
  "",
  verifyTokenMiddleware,
  ensureIsOwnerContactMiddleware,
  listContactController
);
contactsRoutes.get(
  "/:id",
  verifyTokenMiddleware,
  ensureIsOwnerContactMiddleware,
  readContactController
);
contactsRoutes.patch(
  "/:id",
  validatedDataMiddleware(contactSchemaPartial),
  verifyTokenMiddleware,
  ensureIsOwnerContactMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  ensureIsOwnerContactMiddleware,
  deleteContactController
);

export { contactsRoutes };
