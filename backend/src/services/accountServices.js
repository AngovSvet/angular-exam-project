import { Account } from "../models/Account.js"
import { User } from "../models/User.js";


export const createAcc = async (data) =>{
    const account = await Account.create(data);

    await User.findByIdAndUpdate({_id:data.owner},{$push: {accounts:account._id}})

    return account
}


export const getAccounts = async (userId)=>{
    const accounts = await Account.find({owner:userId})

    return accounts;
}