import express from "express";
import { auth } from "../utils/auth.js";
import { changeStatus, createAcc, getAccounts } from "../services/accountServices.js";
import { errorHandler } from "../utils/error.js";
import { owns } from "../utils/owns.js";


const router = express.Router();

router.post("/account/create",auth(),async (req,res)=>{
    const userId = req.user.id;

    const data = req.body
    // const data = {
    //     accoutType:"Checking",
    //     balance:"12000",
    //     currency:"Lev",
    //     status:"active",
    //     owner:userId
    // }
    data.owner=userId
    try {
        const account = await createAcc(data);
        res.json(account)
    } catch (error) {
        const message = errorHandler(error);
        res.json({error:message})
    }
})

router.get("/get/accounts", auth(), async (req, res)=>{

    try {
        const accounts = await getAccounts(req.user.id);
        res.json(accounts)
    } catch (error) {
        const message = errorHandler(error);
        res.json({error:message})
    }
})

router.post("/account/edit", auth(), owns, async (req, res)=>{
    const status = req.body
    // const status = "inactive"
    const id = req.params.id
    try {
        const account = await changeStatus(id,status);
        res.json(account)
    } catch (error) {
        const message = errorHandler(error);
        res.json({error:message})
    }


})

export {router}