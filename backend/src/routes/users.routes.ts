import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            password,
            email,
        });

        // @ts-expect-error -> Não pode retornar a senha do usuário na requisição.
        delete user.password;

        return response.json(user);
    } catch ({ message }) {
        return response.status(400).json({ message });
    }
});

export default usersRouter;
