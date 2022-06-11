import { Router } from "express";

import usersRouter from "./users.routes";
import cardcollectionRouter from "./cardcollection.routes";
import walletRouter from "./wallets.routes";

const router = Router()

router.use('/users', usersRouter)
router.use('/createWallet', walletRouter)
router.use('/createCardCollection', cardcollectionRouter)


export default router