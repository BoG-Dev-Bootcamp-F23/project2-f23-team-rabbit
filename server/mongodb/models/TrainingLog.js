import mongoose from "mongoose"



const trainingLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId // training log's id
    },
    animal: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String
    },
    date: {
        type: Date
    },
    description: {
        type: String
    },
    hours: {
        type: Number
    }
  })