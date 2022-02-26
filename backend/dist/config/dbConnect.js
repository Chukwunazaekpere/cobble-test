"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/src/config/config.env" });
const DB_URL = process.env.NODE_ENV === "development" ?
    process.env.LOCAL_DB :
    process.env.LIVE_DB;
const dbConnection = async () => {
    try {
        await mongoose_1.default.connect(DB_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("\n\t DB connection was successful.");
    }
    catch (error) {
        console.log("\n\t DB connection was unsuccessful.");
    }
};
exports.default = dbConnection;
