import express from "express";
import { register } from "../services/userServices.js";

const router = express.Router();

router.get("/",async (req,res)=>{
    // const {email, password,username,rePass} = req.body
    const email = "ivan@abv.bg";
    const password = "123456789";
    const username = "baby mama";
    const rePass = "123456789"

    const user = await register(email,password,username,rePass);
    console.log(user);
})

export {router}