import express from "express"

import {router as userController} from "./controllers/userController.js"
import {router as accoutnController} from "./controllers/accountController.js"

const router = express.Router();

router.use(userController)
router.use(accoutnController)


export {router}