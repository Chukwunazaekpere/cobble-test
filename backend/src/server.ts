import express, { Application } from "express";
import cors from "cors";
import appRouter from "./routes";

const CobbleServer: Application = express();

//
CobbleServer.use(express.json()) 
CobbleServer.use(cors());

// routes
CobbleServer.use("/cobble", appRouter);
export default CobbleServer;
