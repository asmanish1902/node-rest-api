import mongoose from "mongoose";
import logger from "./logger.js";

const connectDB = async () => {

    try {
        const connection = await mongoose.connect(
            process.env.MONGODB_URI
        );

        // console.log(
        //     `MongoDB Connected: ${connection.connection.host}`
        // );

        logger.info(`MongoDB Connected: ${connection.connection.host}`);

    } catch (error) {
        // console.error(error);
        logger.error(error);
        process.exit(1);
    }
};

export default connectDB;