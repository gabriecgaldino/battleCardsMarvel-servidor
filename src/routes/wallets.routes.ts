import Router from 'express'
import { getCustomRepository } from 'typeorm'

import WalletRepository from '../repositories/WalletRepository'
import CreateWalletService from '../services/CreateWalletService'

const walletRouter = Router()

walletRouter.get('/', (request, response)=> {
    const walletRepository = getCustomRepository(WalletRepository)
    const wallet = walletRepository.find()

    return response.json(wallet)
})

walletRouter.post('/', (request, response)=> {
    try {
        const createWallet = new CreateWalletService()
        const wallet = createWallet.execute({
            coins: 0
        })
    
        return response.json(wallet) 
    } catch (err) { return response.status(400).json({error: err})}
})

export default walletRouter