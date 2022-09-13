import actorsModel from "../models/actorsModel.js";
import producersModel from "../models/producersModel.js";
import moviesModel from "../models/moviesModel.js";

export const getActorById = async (req, res) => {
  try {
    const entity = await actorsModel.findById(req.params.id);
    return res.status(200).json(entity);
  } catch (error) {
    console.error(error);
  }
};

export const getProducerById = async (req, res) => {
  try {
    const entity = await producersModel.findById(req.params.id);
    return res.status(200).json(entity);
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async (req, res) => {
  try {
    const entity = await moviesModel.findById(req.params.id);
    return res.status(200).json(entity);
  } catch (error) {
    console.error(error);
  }
};
