import { User } from "../models/User.js";
import { getToken } from "../helpers/token.js";
import bCrypt from "bcrypt"
import { removePassword } from "../utils/pass.js";
import { bsonToJson } from "../utils/bson.js";

export const register = async (email, password, username, rePass) => {
  const exists = await User.findOne({ email });

  if (password !== rePass) {
    throw new Error("Invalid email or password");
  }

  if (exists) {
    throw new Error("Invalid email or password");
  }

  let user = await User.create({ email, password, username });
  const token = await getToken(email, user._id);

    user = bsonToJson(user)
    user = removePassword(user);

  return {user,token}
};


export const login = async (username,password) =>{
    let user = await User.findOne({username})

    if (!user){
        throw new Error("Invalid email or password")
    }

    const corPass = await bCrypt.compare(password,user.password);

    if(!corPass){
        throw new Error("Invalid email or password")
    }

    user = bsonToJson(user)
    user = removePassword(user);

    const token = await getToken(username,user._id)

    return {token, user}

}

export const getProfile= async (id)=>{
  let user =  await User.findById(id).populate('accounts');

  user = bsonToJson(user)
  user = removePassword(user);

  return user
}

export const editUser = async (username, email,id)=>{
  let unique = await User.findOne({email})

  if(!username){
    throw new Error('Username is required')
  } else if (!email){
    throw new Error('Email is required')
  }
  

  if(unique){
    throw new Error("User already exist")
  }
  try {
    let user = await User.findByIdAndUpdate(id,{email,username})
    user = bsonToJson(user)
  user = removePassword(user);
  return user;
  } catch (error) {
    throw new Error("Something went wrong")
  }
}