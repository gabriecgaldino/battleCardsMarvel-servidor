import { Router } from "express";
import { getCustomRepository } from "typeorm";

import CardCollectionRepository from "../repositories/CardCollectionRepository";
import WalletRepository from "../repositories/WalletRepository";
import CreateUserService from "../services/CreateUserService";

const usersRouter = Router()

usersRouter.post('/', async (request, response)=> {
    try {
        const 
        { 
            name,
            age,
            email,
            username,
            password,
        } = request.body
        
        const createWallet = getCustomRepository(WalletRepository)
        const wallet = createWallet.create({
            coins: 0
        })
        await createWallet.save(wallet)

        const createCollection = getCustomRepository(CardCollectionRepository)
        const collection = createCollection.create({})
        await createCollection.save(collection)


        const createUser = new CreateUserService()
        const user = await createUser.execute({
            name,
            age,
            email,
            score: 0,
            username,
            password,
            id_Wallet: wallet.id,
            id_cardCollection: collection.id
        })

        delete user.password

        return response.json(user)
    } catch (err) {
        return response.status(400).json({ error: err})
    }
})



export default usersRouter