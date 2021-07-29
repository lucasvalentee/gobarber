import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const { user, token } = await authenticateUserService.execute({
            email,
            password,
        });

        // @ts-expect-error -> Não pode retornar a senha do usuário na requisição.
        delete user.password;

        return response.json({ user, token });
    } catch ({ message }) {
        return response.status(400).json({ message });
    }
});

export default sessionsRouter;
