import express from "express";
import { auth } from "../utils/auth.js";
import { createAcc } from "../services/accountServices.js";


const router = express.Router();

router.get("/account/create",auth(),async (req,res)=>{
    const userId = req.user.id;

    // const data = req.body
    const data = {
        accoutType:"Checking",
        balance:"12000",
        currency:"Lev",
        status:"active",
        owner:userId
    }
    // data.owner=userId

    const account = await createAcc(data);

    res.json(account)
})

export {router}