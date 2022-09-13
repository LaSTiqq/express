import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    min: 1980,
    max: 2022,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  isReleased: {
    type: Boolean,
  },
  collaboration: [Object],
});

export default mongoose.model("movie", movieSchema);
