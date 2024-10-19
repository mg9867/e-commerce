import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    cartData:{
        type:Object,
        default:{}
    }

},{minimize:false})
// mongoose does noot recognize empty object so to 
// get empty cart data to be displayed in mongoose 
// we write minimize false so that cartdata is available at mongoose
const userModel=mongoose.models.user||mongoose.model("user",userSchema);
export default userModel