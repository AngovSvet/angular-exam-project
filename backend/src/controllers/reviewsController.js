import express from "express"
import {  getAll } from "../services/reviewsServices.js";
import { createMessage } from "../services/messageService.js";
import { getAllOffers } from "../services/offerService.js";


const router = express.Router();

router.get("/reviews", async (req,res)=>{

    const reviews = await getAll();

    res.json(reviews)
})

router.post("/message", async (req,res)=>{
    const data = req.body
    // const data = {
    //     name:"Ivan",
    //     email:"example@abv.bg",
    //     message: "Testing the message "
    // }

    try {
        const message =  await createMessage(data);
   res.json(message)
    } catch (error) {
        let message = errorHandler(error);
        res.status(400).json({error:message})
    }
})

router.get("/offer", async (req,res)=>{
    
    try {
        const offers = await getAllOffers();
    res.json(offers)
    } catch (error) {
        const message = errorHandler(error);
        res.status(400).json({error:message})
    }
})


export {router}