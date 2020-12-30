import { Router } from "express";
import appointmentsRouter from "./appointments.routes";
import usersRouter from "./users.routes";
import usersSessions from "./sessions.routes";

const routes = Router();

routes.use("/appointments", appointmentsRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", usersSessions);

export default routes;
