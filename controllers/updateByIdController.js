import actorsModel from "../models/actorsModel.js";
import producersModel from "../models/producersModel.js";
import moviesModel from "../models/moviesModel.js";

export const updateActorById = async (req, res) => {
  try {
    const update = await actorsModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(update);
  } catch (error) {
    console.error(error);
  }
};

export const updateProducerById = async (req, res) => {
  try {
    const update = await producersModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(update);
  } catch (error) {
    console.error(error);
  }
};

export const updateMovieById = async (req, res) => {
  try {
    const update = await moviesModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(update);
  } catch (error) {
    console.error(error);
  }
};
