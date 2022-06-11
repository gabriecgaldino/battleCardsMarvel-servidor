import { getCustomRepository } from "typeorm";

import Wallet from "../models/Wallet";
import WalletRepository from "../repositories/WalletRepository";

interface Request {
    coins: Number
}

class CreateWalletService {
    public async execute({
        coins,
    }: Request): Promise<Wallet> {
        const walletRepository = getCustomRepository(WalletRepository)
        const wallet = walletRepository.create({
            coins
        })
        await walletRepository.save(wallet)
        return wallet
    }
}

export default CreateWalletService