import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({
    accType:{
        type:String,
        required:true
    },
    deposit:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    status:{
        type:String,
        match:/\b(?:Active|Inactive)\b/,
        required:true
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
}, { timestamps: { createdAt: 'created_at' } });

export const Account = mongoose.model("Account",accountSchema)