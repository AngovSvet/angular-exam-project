import express from "express"

import {router as userController} from "./controllers/userController.js"
import {router as accoutnController} from "./controllers/accountController.js"
import {router as reviewsController} from "./controllers/reviewsController.js"

const router = express.Router();

router.use(userController);
router.use(accoutnController);
router.use(reviewsController);


export {router}