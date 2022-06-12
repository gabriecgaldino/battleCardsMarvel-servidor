import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '../models/User'
import authConfig from '../config/auth'


interface Request {
    username: string
    password: string
}

class AthenticateUserService {
    public async execute({username, password}: Request): Promise<{user: User, token: string}> {
        const userRepository = getRepository(User)
        const user = await userRepository.findOne({ where: { username } })
        const passwordMatched = await compare(password, user.password)

        if(!user) {
            throw new Error("Dados incorretos")
        }
        if(!passwordMatched){
            throw new Error("Dados incorretos")
        }
        const { secret, expiresIn } = authConfig.jwt

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn
        })

        return { user, token }
    }
}

export default AthenticateUserService