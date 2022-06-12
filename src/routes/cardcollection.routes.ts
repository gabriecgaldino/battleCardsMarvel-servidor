import { Router } from "express";

import FindCardCollectionService from "../services/FindCardCollectionService";

const cardcollectionRouter = Router()

cardcollectionRouter.get('/', async (request, response)=>{
    const { id } = request.body

    const collection = new FindCardCollectionService()

    const getCollection = await collection.execute(id)
    
    response.json(getCollection)
})

export default cardcollectionRouter