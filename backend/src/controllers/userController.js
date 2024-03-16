import express from "express";
import { register, login} from "../services/userServices.js";
import { errorHandler } from "../utils/error.js";
import { BlackList } from "../models/BlackList.js";

const router = express.Router();

router.post("/user/register", async (req, res) => {
  const { email, password, username, rePass } = req.body
    // const email ="al@abv.bg"
    // const password = "123456789"
    // const username = "me"
    // const rePass = "123456789"
try {
    const {token,user} = await register(email, password, username, rePass);
  res.cookie("auth",token,{httpOnly:true});

  res.status(200).json(user)
} catch (error) {
    let message = errorHandler(error);
    res.status(400).json({error:message}) 
}
});

router.post("/user/login",async (req,res)=>{
    const {email,password} = req.body
    // const email ="paeo@abv.bg"
    // const password = "123456789"
    try {
        const {token,user} = await login(email,password);
        res.cookie("auth",token,{httpOnly:true})
        res.status(200).json(user)
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message}) 
        
    }
})

router.get("/user/logout", async (req,res)=>{
    const token = req.cookies["auth"];
    try {
        await BlackList.create({token:token})
        res.clearCookie("auth").status(200).send("Logged out")
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message}) 
    }
})


export { router };
