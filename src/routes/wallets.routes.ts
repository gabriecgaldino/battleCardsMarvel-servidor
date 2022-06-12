import { Router } from "express";
import FindWalletService from "../services/FindWalletService";

const walletRouter = Router()

walletRouter.get('/', async (request, response)=>{
    const { id } = request.body

    const wallet = new FindWalletService()

    const find = await wallet.execute({ id })
    
    response.json(find)
})

export default walletRouter

