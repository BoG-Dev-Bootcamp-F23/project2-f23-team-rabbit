import getAnimals from "../../../../server/mongoDB/actions/getAnimals";


export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            return res.status(200).json(await getAnimals());
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to get animals!");
        }
    }
}