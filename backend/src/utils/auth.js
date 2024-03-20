import { SECRET } from "../config/expressConfig.js";
import { BlackList } from "../models/BlackList.js";
import * as jwt from "../utils/jwt.js"

export function auth(){
    return async function (req,res,next){
        const token = req.cookies["auth-cookie"] || "";

        if(!token){
            return res.json("Token needed")
        }

        const check = await BlackList.findOne({token});
            if(check){
                res.json("BlackListed Token")
            }

        try {
            const decodedToken = await jwt.verify(token,SECRET);
            req.user = decodedToken;
            req.logedIn = true;
            next()
        } catch (error) {
            res.clearCookie("auth");
            res.send({ message: "Invalid token!" })
        }
    }

}