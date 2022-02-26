import { Request, Response } from "express";
import RentSchema from "../models";


const RentApprovalController = async(req: Request, res: Response) => {
    console.log("\n\t RentApprovalController..", req.body);
    try {
        const { rentAmount, monthlyIncome, paymentPlan } = req.body;
        const accruedInterest = await RentSchema.computeAccruedMonthlyInterest(rentAmount, 0.2, paymentPlan)
        const incomeRate = +monthlyIncome*0.9*6;
        console.log("\n\t incomeRate: ", incomeRate)
        console.log("\n\t accruedInterest: ", accruedInterest)
        if(+incomeRate < (accruedInterest as number)){
            return res.status(403).json({
                message: "Rent was not approved",
                status: "Error"
            })
        }
        await RentSchema.create({
            ...req.body,
            accruedInterest,
            dateCreated: new Date(),
            dateUpdated: new Date(),
        })
        return res.status(200).json({
            message: "Rent was successfully approved.",
            status: "Success"
        })
    } catch (error) {
        console.log("\n\t Error: ", error)
        return res.status(500).json({
            message: "Network error",
            status: "Error"
        })
    }
}

export default RentApprovalController