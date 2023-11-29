import getTrainingLogs from "../../../../server/mongoDB/actions/getTrainingLogs";


export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            return res.status(200).json(await getTrainingLogs());
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to get training logs!");
        }
    }
}