import express from "express";
import { auth } from "../utils/auth.js";
import { changeStatus, createAcc, deleteAcc, deposit, getAccounts, withdraw } from "../services/accountServices.js";
import { errorHandler } from "../utils/error.js";
import { owns } from "../utils/owns.js";


const router = express.Router();

router.post("/account/create",auth(),async (req,res)=>{
    const userId = req.user.id;

    const data = req.body
    data.status="Active"
    data.owner=userId
    try {
        const account = await createAcc(data);
        res.json(account)
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message})
    }
})

router.get("/getAcc/:accountId", auth(),owns, async (req, res)=>{
    const id = req.params.accountId

    try {
        const accounts = await getAccounts(id);
        res.json(accounts)
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message})
    }
})

router.put("/accountStatus/:accountId", auth(), owns, async (req, res)=>{
    const status = req.body.status
    const id = req.params.accountId
    try {
        const account = await changeStatus(id,status);
        res.json(account)
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message})
    }
})

router.delete("/accountDel/:accountId", auth(), owns, async (req,res)=>{
    const accountId = req.params.accountId;
    // const accountId = '65f5f5bc327773d9cbdd5023'
    const userId = req.user.id;

    try {
        const user = await deleteAcc(accountId,userId);
        res.json(user);
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message})
    }
})

router.put('/accountDeposit/:accountId', async (req,res)=>{
    const accountId = req.params.accountId;
    const amount = req.body.amount


    try {
        const user = await deposit(accountId,amount);
        res.json(user);
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message})
    }
})

router.put('/accountWithdraw/:accountId', async (req,res)=>{
    const accountId = req.params.accountId;
    const amount = req.body.amount


    try {
        const user = await withdraw(accountId,amount);
        res.json(user);
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message})
    }
})

export {router}