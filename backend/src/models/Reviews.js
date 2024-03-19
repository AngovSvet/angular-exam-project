import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    text:{
        type: String
    },
    name:{
        type: String
    }
})

export const Reviews = mongoose.model("Reviews",reviewSchema);