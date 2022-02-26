"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/src/config/config.env" });
const PORT = process.env.PORT;
server_1.default.listen(PORT, async () => {
    await (0, dbConnect_1.default)();
    console.log(`\n\t Server connection started at ${PORT}`);
});
