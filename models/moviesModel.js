import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  fullName: {
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
  collaboration: {
    type: [String],
    default: [],
  },
  isReleased: {
    type: Boolean,
  },
  isBoss: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("movie", movieSchema);
