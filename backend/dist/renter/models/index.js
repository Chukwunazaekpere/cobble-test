"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const RentSchema = new mongoose_1.default.Schema({
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
RentSchema.statics.computeAccruedMonthlyInterest = async function (principal, rate, time) {
    try {
        const accruedInterest = (principal * rate * time) / 100;
        return accruedInterest;
    }
    catch (error) {
        return undefined;
    }
};
const Rent = mongoose_1.default.model("Rent", RentSchema);
exports.default = Rent;
