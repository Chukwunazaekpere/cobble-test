import { Router } from "express";
import rentRouter from "../renter/routes";

const appRouter = Router();

appRouter.use("/rent", rentRouter)

export default appRouter;