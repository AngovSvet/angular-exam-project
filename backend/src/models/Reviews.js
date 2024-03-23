import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    text:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    }
},{timestamps:{createdAt:"created_at"}})

export const Reviews = mongoose.model("Reviews",reviewSchema);