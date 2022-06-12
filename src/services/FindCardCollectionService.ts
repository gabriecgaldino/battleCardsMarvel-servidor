import { getCustomRepository } from "typeorm";

import CardCollection from "../models/CardCollection";
import UsersRepository from "../repositories/UsersRepository";
import CardCollectionRepository from "../repositories/CardCollectionRepository";


interface Request {
    id: string
}
class FindCardCollectionService {
    public async execute({ id }: Request): Promise<CardCollection> {
        const user = getCustomRepository(UsersRepository)
        const collection = getCustomRepository(CardCollectionRepository) 

        const getUser = await user.findOne(id)

        const getCollection = await collection.findOne(getUser.id_cardCollection)

        return getCollection
    }
}

export default FindCardCollectionService