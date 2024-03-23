import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    text:{
        type: String,
        required:[true, "Message is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"]
    },
    name:{
        type: String,
        required:[true, "Name is required"]
    }
},{timestamps:{createdAt:"created_at"}})

export const Reviews = mongoose.model("Reviews",reviewSchema);