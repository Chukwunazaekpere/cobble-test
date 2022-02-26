"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const RentApprovalController = async (req, res) => {
    console.log("\n\t RentApprovalController..", req.body);
    try {
        const { rentAmount, monthlyIncome, paymentPlan } = req.body;
        const accruedInterest = await models_1.default.computeAccruedMonthlyInterest(rentAmount, 0.2, paymentPlan);
        const incomeRate = +monthlyIncome * 0.9 * 6;
        console.log("\n\t incomeRate: ", incomeRate);
        console.log("\n\t accruedInterest: ", accruedInterest);
        if (+incomeRate < accruedInterest) {
            return res.status(403).json({
                message: "Rent was not approved",
                status: "Error"
            });
        }
        await models_1.default.create({
            ...req.body,
            accruedInterest,
            dateCreated: new Date(),
            dateUpdated: new Date(),
        });
        return res.status(200).json({
            message: "Rent was successfully approved.",
            status: "Success"
        });
    }
    catch (error) {
        console.log("\n\t Error: ", error);
        return res.status(500).json({
            message: "Network error",
            status: "Error"
        });
    }
};
exports.default = RentApprovalController;
