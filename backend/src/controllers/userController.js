import express from "express";
import { register, login, getProfile, editUser} from "../services/userServices.js";
import { errorHandler } from "../utils/error.js";
import { BlackList } from "../models/BlackList.js";
import { auth } from "../utils/auth.js";
import { samePer } from "../utils/samePerson.js";

const router = express.Router();

router.post("/user/register", async (req, res) => {
  const { email, password, username, rePass } = req.body
    // const email ="al@abv.bg"
    // const password = "123456789"
    // const username = "me"
    // const rePass = "123456789"
try {
    const {token,user} = await register(email, password, username, rePass);
  res.cookie("auth-cookie",token,{httpOnly:true});

  res.status(200).json(user)
} catch (error) {
    let message = errorHandler(error);
    res.status(400).json({error:message}) 
}
});

router.post("/user/login",async (req,res)=>{
    const {username,password} = req.body
    // const username ="mes"
    // const password = "123456789"
    try {
        const {token,user} = await login(username,password);
        res.cookie("auth-cookie",token,{httpOnly:true})
        res.status(200).json(user)
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message}) 
        
    }
})

router.get("/user/logout", async (req,res)=>{
    const token = req.cookies["auth-cookie"];
    try {
        await BlackList.create({token:token})
        res.clearCookie("auth-cookie").send()
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message}) 
    }
})

router.get('/user/:userId', auth(),samePer(),async (req,res)=>{
    const id = req.params.userId

    try {
        const profile = await getProfile(id);
        res.json(profile)
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message}) 
    }
})

router.post('/user/edit', auth(), async (req,res)=>{
    const {email, username ,id}= req.body;


    try {
        const user = await editUser(username,email,id);
        res.json(user);
    } catch (error) {
        const message = errorHandler(error);
        res.status(401).json({error:message}) 
    }
})


export { router };
