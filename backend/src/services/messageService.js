import { Message } from "../models/Message.js"


export const createMessage = (data)=>{
    return Message.create(data);
}