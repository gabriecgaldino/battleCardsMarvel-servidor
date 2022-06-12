import { Router } from "express";

import AthenticateUserService from "../services/AthenticateUserService";

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response)=> {
    try {
        const { username, password } = request.body

        const authenticateUser = new AthenticateUserService()

        const { user, token } = await authenticateUser.execute({
            username, 
            password
        })

        delete user.password

        return response.json({ user, token })
    } catch (err) {
        return response.status(400).json({error: err})
    }
})

export default sessionsRouter