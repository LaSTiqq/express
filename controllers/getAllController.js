import actorsModel from "../models/actorsModel.js";
import producersModel from "../models/producersModel.js";
import moviesModel from "../models/moviesModel.js";

export const getAllActors = async (req, res) => {
  try {
    const all = await actorsModel.find();
    return res.status(202).json(all);
  } catch (error) {
    console.error(error);
  }
};

export const getAllProducers = async (req, res) => {
  try {
    const all = await producersModel.find();
    return res.status(202).json(all);
  } catch (error) {
    console.error(error);
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const all = await moviesModel.find();
    return res.status(202).json(all);
  } catch (error) {
    console.error(error);
  }
};
