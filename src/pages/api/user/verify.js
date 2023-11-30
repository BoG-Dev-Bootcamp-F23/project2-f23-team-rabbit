import verifyUser from "../../../../server/mongoDB/actions/verify"


export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).send("Missing fields");
            }
            const verified = await verifyUser({ email, password });
            return res.status(200).json({
                message: "Success!",
                userID: verified._id,
                admin: verified.admin,
              });
              
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to verify user!");
        }
    }
}