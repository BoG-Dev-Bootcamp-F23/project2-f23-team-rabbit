import connectDB from "../index.js";
import Animal from "../models/Animal.js";

export default async function updateAnimalHours(data) {
    try {
        await connectDB();
        const { animalId, addedHours } = data;
        const animal = await Animal.findById(animalId);

        if (!animal) {
            throw new Error("Animal not found!");
        }

        const animalHours = animal.hoursTrained + addedHours;
        await Animal.findByIdAndUpdate(animalId, { hoursTrained: animalHours });

    } catch (e) {
        // if (e.message === "Animal not found!") {
        //     throw e;
        // } 
        throw e;
    }
}