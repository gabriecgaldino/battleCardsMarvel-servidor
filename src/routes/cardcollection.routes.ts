import { Router } from "express";
import { getCustomRepository } from "typeorm";

import CardCollectionRepository from "../repositories/CardCollectionRepository";
import CreateCardCollectionService from "../services/CreateCardCollectionService";

const cardcollectionRouter = Router()

cardcollectionRouter.get('/', async (request, response)=> {
    const cardcollectionRepository = getCustomRepository(CardCollectionRepository)
    const cardcollection = await cardcollectionRepository.find()

    return response.json(cardcollection)
})

cardcollectionRouter.post('/', async (request, response)=> {
    try{
        const createCardCollection = new CreateCardCollectionService()
        const cardcollection = await createCardCollection.execute({})

        return response.json(cardcollection)
    } catch(err) { return response.status(400).json({error: err})}
})

export default cardcollectionRouter
