import dotenv from "dotenv";
import app from "./app";
dotenv.config();

import mongoose from "mongoose";


mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.info(`The server is running successfuly on port: ${PORT}`);
        })
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err));