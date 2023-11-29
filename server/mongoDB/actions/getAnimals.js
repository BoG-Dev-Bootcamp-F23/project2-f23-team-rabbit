import connectDB from "../index";
import Animal from "../models/Animal";


export default async function getAnimals() {
    try {
        await connectDB();
        const animals = await Animal.find();
        return animals;
    } catch (e) {
        throw e;
    }
}