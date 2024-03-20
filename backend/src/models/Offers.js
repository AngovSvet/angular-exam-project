import mongoose from "mongoose"


const offerSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
})

export const Offer = mongoose.model("Offer", offerSchema);