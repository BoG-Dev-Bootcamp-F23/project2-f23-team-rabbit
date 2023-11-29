import connectDB from "../index";
import User from "../models/User";


export default async function verifyUser(data) {
    try {
        await connectDB();
        const { email, password } = data;
        const user = await User.findOne({ email : email, password : password });
        if (!user) {
            throw new Error("User not found");
        }
        const object = {
            "_id" : String(user._id),
            "admin" : String(user.admin)
        }

        return object;
    } catch (e) {
        throw e;
    }
}