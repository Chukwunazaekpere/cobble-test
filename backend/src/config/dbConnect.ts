import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "./backend/src/config/config.env"})

const DB_URL = process.env.NODE_ENV === "development" ? 
               process.env.LOCAL_DB as string : 
               process.env.LIVE_DB as string;

const dbConnection = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log("\n\t DB connection was successful.");
    } catch (error) {
        console.log("\n\t DB connection was unsuccessful.");
        
    }
}

export default dbConnection;