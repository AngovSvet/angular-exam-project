
export function samePer(){
    return async function (req,res,next){
        if(req.user.id!==req.params.userId){
            res.clearCookie("auth-cookie");
            return res.status(400).json({error:"Not allowed"})
        }
        next()
    }

}