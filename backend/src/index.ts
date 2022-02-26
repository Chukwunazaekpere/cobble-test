import dbConnection from "./config/dbConnect";
import CobbleServer from "./server";

import dotenv from "dotenv";
dotenv.config({path: "./backend/src/config/config.env"})

const PORT = process.env.PORT;

CobbleServer.listen(PORT, async() => {
    await dbConnection();
    console.log(`\n\t Server connection started at ${PORT}`)
})