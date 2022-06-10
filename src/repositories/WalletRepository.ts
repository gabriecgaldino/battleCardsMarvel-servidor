import { EntityRepository, Repository } from "typeorm";

import Wallet from "../models/Wallet";

@EntityRepository(Wallet)
class WalletRepository extends Repository<Wallet> {
    public async findById(id: string): Promise<Wallet | null> {
        const findId = await this.findOne({
            where: { id },
        })
        return findId || null
    }
}

export default WalletRepository
