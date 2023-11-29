import createTrainingLog from "../../../server/mongoDB/actions/createTrainingLog";
import mongoose from "mongoose";
import updateAnimalHours from "../../../server/mongoDB/actions/updateAnimalHours";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { user, animal, title, date, description, hours } = req.body;
            if (!user || !animal || !title || !date || !description || !hours) { //assuming everything inputted from the form is a string
                return res.status(400).send("Missing fields");
            }

            const newHours = Number(hours);
            if (isNaN(newHours)) {
                return res.status(400).send("Hours must only contain numbers!");
            }

            const newDate = new Date(date); //assuming date is in the format of YYYY-MM-DD

            //type cast str -> ObjectId
            //maybe some type of error handling?
            const newUser = new mongoose.Types.ObjectId(user);
            const newAnimal = new mongoose.Types.ObjectId(animal);

            await createTrainingLog({ user : newUser, animal : newAnimal, title, date : newDate, description, hours : newHours });
            try {
                await updateAnimalHours({ animalId : newAnimal, addedHours : newHours });
            } catch (e) {
                return res.status(400).send("Animal not found!");
            }
            return res.status(200).send("Success");
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to create Training Log!");
        }
    }
}