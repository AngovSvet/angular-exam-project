import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({
    accType:{
        type:String,
    },
    deposit:{
        type:Number
    },
    currency:{
        type:String,
    },
    status:{
        type:String,
        match:/\b(?:active|inactive)\b/
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
}, { timestamps: { createdAt: 'created_at' } });

export const Account = mongoose.model("Account",accountSchema)