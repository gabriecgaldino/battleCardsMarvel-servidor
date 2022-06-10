import { EntityRepository, Repository } from "typeorm";

import User from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findByUsername(name: string): Promise<User | null> {
        const findUsername = await this.findOne({
            where: { name },
        })

        return findUsername || null
    }
}

export default UsersRepository