import connectDB from "../index";
import Animal from "../models/Animal";


export default async function getAnimalById(animalId) {
    try {
        await connectDB();
        const animal = await Animal.findById(animalId);
        return animal;
    } catch (e) {
        throw e;
    }
}