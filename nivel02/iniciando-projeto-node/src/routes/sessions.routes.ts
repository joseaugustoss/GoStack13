import { Router } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRoutes = Router();

sessionsRoutes.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_up: user.created_at,
      updated_at: user.updated_at,
    };
    return response.status(200).json({ user: userWithoutPassword, token });
  } catch (err) {
    return response.status(err.statusCode).json({ error: err.message });
  }
});

export default sessionsRoutes;
