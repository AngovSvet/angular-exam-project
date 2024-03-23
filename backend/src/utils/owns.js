import { Account } from "../models/Account.js";

export const owns = async (req,res,next) =>{
    // const id = '65f5f5bc327773d9cbdd5023'
    const _id=req.params.accountId
    const account =await Account.findById(_id);

    if(!req.user){
        return res.status(401).json({error:"Login needed"})
    }

    if(account.owner != req.user.id){
        return res.status(401).json({error:"Not owner"})
    }
    
    return next()

}