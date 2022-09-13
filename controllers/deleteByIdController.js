import actorsModel from "../models/actorsModel.js";
import producersModel from "../models/producersModel.js";
import moviesModel from "../models/moviesModel.js";

export const deleteActorById = async (req, res) => {
  try {
    await actorsModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(`Actor has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProducerById = async (req, res) => {
  try {
    await producersModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(`Producer has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteMovieById = async (req, res) => {
  try {
    await moviesModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(`Movie has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};
