import mongoose, { Model } from "mongoose";

interface RentInterface {
    accomodationStatus: string
    rentAmount: number
    paymentPlan: string
    monthlyIncome: number
    accruedInterest: number
    dateUpdated: Date
    dateCreated: Date
};

interface RentMethods extends Model<RentInterface> {
    computeAccruedMonthlyInterest: (principal: number, rate: number, time: number) => Promise<number | undefined>
}

const RentSchema = new mongoose.Schema({
    accomodationStatus: {
        type: String,
        required: true,
        index: true,
    },
    rentAmount: {
        type: Number,
        required: true,
        index: true,
    },
    accruedInterest: {
        type: Number,
        required: true,
        index: true,
    },
    monthlyIncome: {
        type: Number,
        required: true,
    },
    paymentPlan: {
        type: String,
        required: true,
    },
    dateUpdated: {
        type: Date,
        required: true,
        index: true,
    },
    dateCreated: {
        type: Date,
        required: true,
        index: true,
    },
});


RentSchema.statics.computeAccruedMonthlyInterest = async function(principal: number, rate: number, time: number): Promise<number | undefined> { 
    try {
        const accruedInterest = (principal*rate*time)/100;
        return accruedInterest;
    } catch (error: any) {
        return undefined
    }
}
const Rent = mongoose.model<RentInterface, RentMethods>("Rent", RentSchema);
export default Rent;