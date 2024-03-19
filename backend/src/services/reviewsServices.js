import { Reviews } from "../models/Reviews.js"



export const getAll= async ()=>{
    const reviews =  Reviews.find();
    return reviews
}
