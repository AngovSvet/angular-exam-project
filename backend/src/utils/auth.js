import { SECRET } from "../config/expressConfig.js";
import { BlackList } from "../models/BlackList.js";
import * as jwt from "../utils/jwt.js"

export function auth(){
    return async function (req,res,next){
        const token = req.cookies["auth-cookie"] || "";

        if(!token){
            return res
            .status(401)
            .send({ message: "No token!" });
        }

        const check = await BlackList.findOne({token});
            if(check){
                res
                        .status(401)
                        .send({ message: "Blacklisted token!" });
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