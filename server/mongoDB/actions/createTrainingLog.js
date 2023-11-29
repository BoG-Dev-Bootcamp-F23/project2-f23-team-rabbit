import connectDB from "../index.js";
import TrainingLog from "../models/TrainingLog.js";

export default async function createTrainingLog(data) {
    try {
        await connectDB();
        const trainingLog = new TrainingLog(data);
        await trainingLog.save();
    } catch (e) {
        throw e
    }
}