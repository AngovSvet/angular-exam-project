import express from "express"

import {  createRev, getAll } from "../services/reviewsServices.js";
import { auth } from "../utils/auth.js";
import { getAllOffers } from "../services/offerService.js";
import { errorHandler } from "../utils/error.js";


const router = express.Router();

router.get("/reviews", async (req,res)=>{

    const reviews = await getAll();

    res.json(reviews)
})

router.post("/review", auth(),async (req,res)=>{
    const data = req.body
    try {
        const message =  await createRev(data);
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