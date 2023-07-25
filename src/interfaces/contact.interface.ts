import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
} from "../schemas/contact.schemas";
type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;

export { TContact, TContactRequest };
