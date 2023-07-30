import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { contactsRoutes } from "./routes/contacts.routes";
import loginRoute from "./routes/login.routes";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use("/users", userRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", loginRoute);
app.use(handleAppError);
export default app;
