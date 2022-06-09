import uuid from 'uuidv4'
import datasource from "../database";
import User from "../models/User";
import UserRepository from '../repositories/UserRespository';

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
/*

const CreateUserService = datasource.getRepository(UserRepository).extend({
    async execute({
        id,
        name, 
        age, 
        email, 
        id_Wallet, 
        id_cardCollection, 
        score, 
        username, 
        password
    }: Request): Promise<User> {
        const userRepository = UserRepository
        const user = UserRepository.create({
            id: 'uuid',
            name, 
            age, 
            email, 
            id_Wallet: 'uuid', 
            id_cardCollection: 'uuid', 
            score, 
            username, 
            password
        })

        await UserRepository.save(user)
        return user
    }        
})

export default CreateUserService

*/
