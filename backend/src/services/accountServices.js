import { Account } from "../models/Account.js"
import { User } from "../models/User.js";


export const createAcc = async (data) =>{
    const account = await Account.create(data);

    await User.findByIdAndUpdate({_id:data.owner},{$push: {accounts:account._id}})

    return account
}


export const getAccounts = async (_id)=>{
    try {
        const account = await Account.findOne({_id}).populate('owner')
        return account
    } catch (error) {
        throw new Error(error.message)
    }
}

export const changeStatus = async (id, status)=>{
    const account = await Account.findByIdAndUpdate(id,{status}, {new:true});

    return account;
}

export const deleteAcc = async (id, userId) =>{
    await Account.findByIdAndDelete(id);
    const user = await User.findByIdAndUpdate(userId,{$pull:{accounts:id}}, {new:true})

    return user;
}

export const deposit = async (id,amount)=>{
    const account = await Account.findById(id);
    const sum = account.deposit+amount;
    const ac = await Account.findByIdAndUpdate(id,{deposit:sum},{new:true})

    return ac
}

export const withdraw = async (id,amount)=>{
    const account = await Account.findById(id);
    if (amount>account.deposit) {
        throw new Error("Insufficent funds")
    }
    const sum = account.deposit-amount;
    const ac = await Account.findByIdAndUpdate(id,{deposit:sum},{new:true})

    return ac
}
