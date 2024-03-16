import { Account } from "../models/Account.js";

export const owns = async (req,res,next) =>{
    const account =await Account.findById(req.params.accountId);

    if(!req.user){
        return res.json({error:"Login needed"})
    }

    if(account.owner != req.user.id){
        return res.json({error:"Not owner"})
    }
    
    return next()

}