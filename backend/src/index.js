import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { configureEx } from "./config/expressConfig.js";
import { router } from "./controllers/userController.js";


const app = express();


configureEx(app)

app.use (cors({
    origin:"http://localhost:4200",
    credentials:true
}))

app.use(router)


async function main(){
    mongoose.connect("mongodb://localhost:27017/angular-exam")
    console.log("Db was connected successfully");
}
main()

app.listen(3000,()=>console.log('App is listening on port 3000...'))
