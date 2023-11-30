import createUser from "../../../server/mongoDB/actions/createUser";
import getUserById from "../../../server/mongoDB/actions/getUserById";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { fullName, email, password, admin } = req.body;
            if (!email || !password || !fullName || !admin) {
                return res.status(400).send("Missing fields");
            }

            // console.log(admin);
            // // const newAdmin = Boolean(admin);
            // console.log(newAdmin);

            await createUser({ fullName, email, password, admin });
            return res.status(200).json({ message: "Success" });
        } catch (e) {
            console.log(e);
            return res.status(500).send("Error! Could not create user!")
        }
    } else if (req.method === "GET") {
        try {
            const { userId } = req.query;
            if (!userId) {
                return res.status(400).send("Missing fields");
            }
            const user = await getUserById(userId);
            return res.status(200).send(user);
        } catch (e) {
            return res.status(500).send("Failed to get user!");
        }
    }
}