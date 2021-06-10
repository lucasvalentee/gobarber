import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import User from '../models/User';

interface RequestDTO {
    name: string;
    password: string;
    email: string;
}

class CreateUserService {
    public async execute({ name, password, email }: RequestDTO): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new Error('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            password: hashedPassword,
            email,
        });

        return usersRepository.save(user);
    }
}

export default CreateUserService;
