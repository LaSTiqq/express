import mongoose from "mongoose";

const producerSchema = new mongoose.Schema({
  fullName: {
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
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  countOfMovies: {
    type: Number,
  },
  onVacation: {
    type: Boolean,
  },
  isBoss: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("producer", producerSchema);
