import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { contactsRoutes } from "./routes/contacts.routes";
import loginRoute from "./routes/login.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", loginRoute);
app.use(handleAppError);
export default app;
