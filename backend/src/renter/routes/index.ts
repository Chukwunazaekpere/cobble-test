import { Router } from "express";
import RentApprovalController from "../controllers";

const rentRouter = Router();

rentRouter.post("/rent-request", RentApprovalController)

export default rentRouter;