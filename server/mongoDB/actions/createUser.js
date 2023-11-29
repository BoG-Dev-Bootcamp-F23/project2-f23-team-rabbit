import User from "../models/User";
import connectDB from "../index.js";

export default async function createUser(data) { 
    try {
        await connectDB();
        const user = new User(data);
        await user.save();
    } catch (e) {
        throw e;
    }
}