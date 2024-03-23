import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({
    accType:{
        type:String,
        required:[true, "Account type is required"],
    },
    deposit:{
        type:Number,
        required:[true, "Deposit is required"]
    },
    currency:{
        type:String,
        required:[true, "Currency is required"]
    },
    status:{
        type:String,
        match:/\b(?:Active|Inactive)\b/,
        required:[true, "Status is required"]
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
}, { timestamps: { createdAt: 'created_at' } });

export const Account = mongoose.model("Account",accountSchema)