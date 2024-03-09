import express from "express";
import { register, login} from "../services/userServices.js";
import { errorHandler } from "../utils/error.js";

const router = express.Router();

router.get("/user/register", async (req, res) => {
//   const { email, password, username, rePass } = req.body
    const email ="ael@abv.bg"
    const password = "123456789"
    const username = "me"
    const rePass = "123456789"
try {
    const {token,user} = await register(email, password, username, rePass);
  res.cookie("auth",token);

  res.status(200).json(user)
} catch (error) {
    let message = errorHandler(error);
    res.status(400).json({error:message}) 
}
});

router.get("/user/login",async (req,res)=>{
    // const {email,password} = req.body
    const email ="paeo@abv.b"
    const password = "123456789"
    try {
        const {token,user} = await login(email,password);
        res.cookie("auth",token)
        res.status(200).json(user)
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message}) 
        
    }
})


export { router };
