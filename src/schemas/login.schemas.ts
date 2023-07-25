import { z } from "zod";

const loginSchemaRequest = z.object({
  email: z.string(),
  password: z.string(),
});

const tokenSchema = z.object({
  token: z.string(),
});

export { loginSchemaRequest, tokenSchema };
