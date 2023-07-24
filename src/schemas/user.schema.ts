import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  password: z.string(),
  telephone: z.string(),
  date: z.date(),
});

const userSchemaRequest = userSchema.omit({ id: true, date: true });

const userSchemaResponse = userSchema.omit({ password: true });

const patchUserSchema = userSchemaRequest.partial();
export { userSchema, userSchemaRequest, userSchemaResponse, patchUserSchema };
