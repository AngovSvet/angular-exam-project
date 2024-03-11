import { Account } from "../models/Account.js"
import { User } from "../models/User.js";


export const createAcc = async (data) =>{
    console.log(data);
    const account = await Account.create(data);

    const user = await User.findByIdAndUpdate({_id:data.owner},{$push: {accounts:account._id}},{new:true});
    console.log(user);

    return account
}