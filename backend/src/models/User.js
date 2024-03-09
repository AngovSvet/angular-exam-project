import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        match:/[a-z0-9]+@[a-z]+\.[a-z]+/
    },

    username:{
        type:String,
        required:true,
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },

    password:{
        type:String,
        required:true,
        minLength:[8,"Longer password is required"],
        validate:{
            validator: function (el){
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message:(props)=>`${props.name} should contain only latin letters and numbers!`
        }
    },

    account:{
        type:mongoose.Types.ObjectId,
        ref:"Account"
    }
},{timestamps:{createdAt:"created_at"}})

export const User = mongoose.model("User",userSchema);