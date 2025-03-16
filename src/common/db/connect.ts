import mongoose from "mongoose";
import { ENV } from "../config";

export const connect = async () => {
    try {
        
        mongoose.set({debug:true})
        await mongoose.connect(ENV.MONGO_URL);
    } catch (error) {
        console.log('Error connecting to database', error);
        
    }
}