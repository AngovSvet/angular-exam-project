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


export const login = async (email,password) =>{
    let user = await User.findOne({email})

    if (!user){
        throw new Error("Invalid email or password")
    }

    const corPass = await bCrypt.compare(password,user.password);

    if(!corPass){
        throw new Error("Invalid email or password")
    }

    user = bsonToJson(user)
    user = removePassword(user);
    
    const token = await getToken(email,user._id)

    return {token, user}

}