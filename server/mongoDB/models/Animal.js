import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      breed: {
        type: String,
        required: true,
      },
      owner: {
        type: String,
        required: true,
      },
      hoursTrained: {
        type: Number,
        default: 0,
      },
      profilePictureUrl: {
        type: String,
        default: "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",      
    }
});


export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema) 