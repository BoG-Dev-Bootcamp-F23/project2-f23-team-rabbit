import createAnimal from "../../../server/mongoDB/actions/createAnimal";
import updateAnimalHours from "../../../server/mongoDB/actions/updateAnimalHours";
import getAnimalById from "../../../server/mongoDB/actions/getAnimalById";


export default async function animalHandler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, breed, owner, hoursTrained, profilePictureUrl } = req.body;

            if (!name || !breed || !owner) {
                return res.status(400).send("Missing fields");
            }

            if (!hoursTrained && !profilePictureUrl) {
                await createAnimal({ name, breed, owner });
            } else if (!hoursTrained) {
                await createAnimal({ name, breed, owner, profilePictureUrl });
            } else if (!profilePictureUrl) {
                const newHoursTrained = Number(hoursTrained); // Convert string from forum to number
                if (isNaN(newHoursTrained)) {
                    return res.status(400).send("Hours must only contain numbers!");
                }
                await createAnimal({ name, breed, owner, hoursTrained : newHoursTrained});
            } else {
                const newHoursTrained = Number(hoursTrained);
                if (isNaN(newHoursTrained)) {
                    return res.status(400).send("Hours must only contain numbers!");
                }
                await createAnimal({ name, breed, owner, hoursTrained : newHoursTrained, profilePictureUrl });
            }

            return res.status(200).send("Success");
        } catch (e) {
            console.log(e)
            return res.status(500).send("Faield to create animal!")
        }
    } else if (req.method === "PATCH") {
        try {
            const { animalId, addedHours } = req.body;
            await updateAnimalHours({ animalId : animalId, addedHours : addedHours });
            return res.status(200).send("Success");
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to update animal hours!");
        }
    } else if (req.method === "GET") {
        try {
            const { animalId } = req.query;
            if (!animalId) {
                return res.status(400).send("Missing fields");
            }
            const animal = await getAnimalById(animalId);
            return res.status(200).send(animal);
        } catch (e) {
            return res.status(500).send("Failed to get animal!");
        }
    }
}