import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 30,
    max: 100,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  onVacation: {
    type: Boolean,
  },
});

export default mongoose.model("actor", actorSchema);
