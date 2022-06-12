import { getCustomRepository } from "typeorm"
import Wallet from "../models/Wallet"
import UsersRepository from "../repositories/UsersRepository"
import WalletRepository from "../repositories/WalletRepository"

interface Request {
    id: string
}

class FindWalletService {
    public async execute({ id }: Request): Promise<Wallet> {
        const users = getCustomRepository(UsersRepository)
        const wallet = getCustomRepository(WalletRepository)

        const getUser = await users.findOne(id)

        const getWallet = await wallet.findOne(getUser.id_Wallet)

        return getWallet 
    }
}

export default FindWalletService