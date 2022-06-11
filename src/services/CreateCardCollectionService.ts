import { getCustomRepository } from "typeorm";

import CardCollection from "../models/CardCollection";
import CardCollectionRepository from "../repositories/CardCollectionRepository";

interface Request {
}

class CreateCardCollectionService {
    public async execute({
    }: Request): Promise<CardCollection> {
        const cardCollection = getCustomRepository(CardCollectionRepository)
        const cardcolletion = cardCollection.create()
        await cardCollection.save(cardcolletion)

        return cardcolletion
    }
}

export default CreateCardCollectionService