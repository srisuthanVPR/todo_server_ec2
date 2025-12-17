//Connectivity between <Express && MongoDB>
//const mongoose =require('mongoose') commonjs
import dotenv from 'dotenv' //to use .env file
import mongoose from "mongoose"//module

dotenv.config()
const connectDb =()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err);
    }
}
export default connectDb