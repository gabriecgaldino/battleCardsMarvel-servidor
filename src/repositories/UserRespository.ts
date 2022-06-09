import { Repository } from "typeorm";
import datasource from "../database";

import User from "../models/User";


const UserRepository = datasource.getRepository(User).extend({
    async findByUsername(username: string): Promise<User | null> {
        const findUser = await this.findOne({
            where: { username },
        })
        
        return findUser || null
    }
})

export default UserRepository