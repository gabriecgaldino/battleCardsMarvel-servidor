import { getCustomRepository } from "typeorm";

import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface Request {
    name: string
    age: string
    email: string
    score: Number
    username: string
    password: string 
}

class CreateUserService {
    public async execute({
        name,
        age,
        email,
        score,
        username,
        password, 
    }: Request): Promise<User> {
        const userRepository = getCustomRepository(UsersRepository)

        const user = userRepository.create({
            name,
            age,
            email,
            score,
            username,
            password,
        })
        await userRepository.save(user)

        return user
    }
}

export default CreateUserService