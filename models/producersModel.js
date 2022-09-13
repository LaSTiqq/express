import mongoose from "mongoose";

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 10,
    max: 120,
    required: true,
  },
  countOfMovies: {
    type: Number,
  },
  onVacation: {
    type: Boolean,
  },
});

export default mongoose.model("producer", producerSchema);
