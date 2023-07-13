import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const DBConnection = async () => {
    
    try {
        await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})
        console.log('DB Connected')
    } catch (error) {
        console.error('Error connecting to DB', error.message)
    }
}

export default DBConnection;