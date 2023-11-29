import getUsers from "../../../../server/mongoDB/actions/getUsers";


export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const list = await getUsers();
            return res.status(200).json(list); //just success or a list of obejcts?
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to get users!");
        }
    }
}