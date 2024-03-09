import express from "express"

import {router as userController} from "./controllers/userController.js"

const router = express.Router();

router.use(userController)

export {router}