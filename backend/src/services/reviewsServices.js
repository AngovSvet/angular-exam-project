import { Reviews } from "../models/Reviews.js"



export const getAll= async ()=>{
    const reviews =  Reviews.find().sort({ created_at: -1 }).limit(4);
    return reviews
}

export const createRev = (data)=>{
    return Reviews.create(data)
}
