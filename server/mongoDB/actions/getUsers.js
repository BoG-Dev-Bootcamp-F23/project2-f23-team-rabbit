import User from "../models/User";
import connectDB from "../index";


export default async function getUsers() {
    try {
        await connectDB();
        const users = await User.find({}, { password : 0 });
        return users;
    } catch (e) {
        throw e;
    }
}