import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  telephone: z.string(),
  email: z.string().email(),
  date: z.date(),
});

const contactSchemaRequest = contactSchema.omit({ id: true, date: true });
const contactSchemaPartial = contactSchema.omit({ id: true }).partial();
const contactsSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaPartial,
  contactsSchemaResponse,
};
