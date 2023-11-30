import User from "../models/User";
import connectDB from "../index";


export default async function getUserById(userID) {
    try {
        await connectDB();
        const user = await User.findById(userID, { password : 0 });
        return user;
    } catch (e) {
        throw e;
    }
}