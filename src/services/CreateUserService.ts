import { getCustomRepository } from "typeorm";

import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface Request {
    id: string
    name: string
    age: Date
    email: string
    id_Wallet: string
    id_cardCollection: string
    score: Number
    username: string
    password: string 
}

class CreateUserService {
    public async execute({
        id,
        name,
        age,
        email,
        id_Wallet,
        id_cardCollection,
        score,
        username,
        password, 
    }: Request): Promise<User> {
        const userRepository = getCustomRepository(UsersRepository)

        const user = userRepository.create({
            id,
            name,
            age,
            email,
            id_Wallet,
            id_cardCollection,
            score,
            username,
            password,
        })
        await userRepository.save(user)

        return user
    }
}

export default CreateUserService