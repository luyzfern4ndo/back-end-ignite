import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const authenticateUseCase = container.resolve(AuthenticateUserUseCase);

      const token = await authenticateUseCase.execute({ email, password });

      return response.json(token);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AuthenticateUserController };
