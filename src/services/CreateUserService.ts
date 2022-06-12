import { hash } from "bcryptjs";
import { getRepository } from "typeorm";

import User from "../models/User";


interface Request {
    name: string
    age: string
    email: string
    score: Number
    username: string
    password: string  
    id_Wallet: string,
    id_cardCollection: string
}
class CreateUserService {
    public async execute({
        name,
        age,
        email,
        score,
        username,
        password,
        id_Wallet,
        id_cardCollection
    }: Request): Promise<User> {

        const usersRepository = getRepository(User)
        const checkUsernameExists = await usersRepository.find({
            where: { username, email, name },
        })

        /** A Validação está retornando verdadeiro, avaliar
        * if(checkUsernameExists) {
        *    throw new Error ('Usuário já cadastrado!')
        *
        * }
        */  

        const hashedPass = await hash(password, 8)

        const user = usersRepository.create({
            name, 
            age,
            email,
            score,
            username,
            password: hashedPass,
            id_Wallet,
            id_cardCollection,
        })

        await usersRepository.save(user)

        return user
    }
}
export default CreateUserService