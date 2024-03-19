import express from "express"
import {  getAll } from "../services/reviewsServices.js";


const router = express.Router();

router.get("/reviews", async (req,res)=>{

    const reviews = await getAll();

    console.log(reviews);

    res.json(reviews)
})


export {router}