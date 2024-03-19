import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

// const connectionSring = 'mongodb+srv://sugutlynn:sugutlynn@cluster0.yjsqky7.mongodb.net/site_db';
const connectionSring = process.env.DB_STRING;

export const connectToDB = async () => {
    try {
        await mongoose.connect(connectionSring, {
            autoIndex: true
        })
        console.log('DATABASE CONNECTION SUCCESSFUL');
        
    } catch (error) {
        console.error(error);
        
    }
}
