import connectDB from "../index";
import TrainingLog from "../models/TrainingLog";


export default async function getTrainingLogs() {
    try {
        await connectDB();
        const logs = await TrainingLog.find();
        return logs;
    } catch (e) {
        throw e;
    }
}