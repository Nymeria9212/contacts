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

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validatedDataMiddleware(contactSchemaRequest),
  verifyTokenMiddleware,
  createContactController
);
contactsRoutes.get("", verifyTokenMiddleware, listContactController);
contactsRoutes.get("/:id", verifyTokenMiddleware, readContactController);
contactsRoutes.patch(
  "/:id",
  validatedDataMiddleware(contactSchemaPartial),
  verifyTokenMiddleware,
  updateContactController
);
contactsRoutes.delete("/:id", verifyTokenMiddleware, deleteContactController);

export { contactsRoutes };
