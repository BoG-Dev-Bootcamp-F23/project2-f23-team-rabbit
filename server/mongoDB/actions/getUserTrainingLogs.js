import connectDB from "../index";
import TrainingLog from "../models/TrainingLog";


export default async function getUserTrainingLogs(userID) {
    try {
        await connectDB();
        const logs = await TrainingLog.find({user: userID});
        return logs;
    } catch (e) {
        throw e;
    }
}