import { EntityRepository, Repository } from "typeorm";

import CardCollection from "../models/CardCollection";

@EntityRepository(CardCollection)
class CardCollectionRepository extends Repository<CardCollection> {
    public async findByIdCollection(id: string): Promise<CardCollection | null> {
        const findByIdCollection = await this.findOne({
            where: { id },
        })
        return findByIdCollection || null
    }
}

export default CardCollectionRepository