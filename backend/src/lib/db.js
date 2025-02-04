import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED")
    }
    catch(error){
        console.log("MONGODB CONNECTION ERROR", error)
    }
}