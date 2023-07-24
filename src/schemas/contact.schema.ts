import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  telephone: z.string(),
  date: z.date(),
});

const contactSchemaRequest = contactSchema.omit({ id: true });

export { contactSchema, contactSchemaRequest };
