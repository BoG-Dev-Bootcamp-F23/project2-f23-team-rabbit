import createUser from "../../../server/mongoDB/actions/createUser";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { fullName, email, password, admin } = req.body;
            if (!email || !password || !fullName || !admin) {
                return res.status(400).send("Missing fields");
            }

            if (admin !== "true" && admin !== "false") {
                return res.status(400).send("Admin must be true or false");
            }
            const newAdmin = Boolean(admin);

            await createUser({ fullName, email, password, admin : newAdmin });
            return res.status(200).json({ message: "Success" });
        } catch (e) {
            console.log(e);
            return res.status(500).send("Error! Could not create user!")
        }
    }
}