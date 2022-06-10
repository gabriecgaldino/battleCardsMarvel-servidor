import { Router } from "express";
import { getCustomRepository } from "typeorm";

import UsersRepository from "../repositories/UsersRepository";
import CreateUserService from "../services/CreateUserService";

const usersRouter = Router()

usersRouter.get('/', async (request, response)=> {
    const usersRepository = await getCustomRepository(UsersRepository)
    const users = usersRepository.find()

    return response.json(users)
})
usersRouter.post('/', async(request, response)=> {
    try {
        const 
        { 
            id,
            name,
            age,
            email,
            id_Wallet,
            id_cardCollection,
            score,
            username,
            password,
        } = request.body

        const createUser = new CreateUserService()

        const user = await createUser.execute({
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

        return response.json(user)
    } catch (err) {
        return response.status(400).json({ error: err})
    }
})

export default usersRouter