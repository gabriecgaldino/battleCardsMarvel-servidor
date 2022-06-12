import { Router } from "express";

import usersRouter from "./users.routes";
import sessionsRouter from "./sessions.routes";
import walletRouter from "./wallets.routes"
import cardcollectionRouter from "./cardcollection.routes";

const router = Router()

router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)
router.use('/wallets', walletRouter)
router.use('/cardscollection', cardcollectionRouter)

export default router