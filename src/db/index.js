import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        console.log("--------------------------------------")
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("--------------------------------------")
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB - DBhost:${connectionInstance.connection.host}`);
    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export default connectDB;
