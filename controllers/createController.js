import actorsModel from "../models/actorsModel.js";
import producersModel from "../models/producersModel.js";
import moviesModel from "../models/moviesModel.js";

export const createActorEntity = async (req, res) => {
  try {
    const newEntity = new actorsModel({
      ...req.body,
    });
    await newEntity.save();
    return res.status(201).send("New actor entity is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const createProducerEntity = async (req, res) => {
  try {
    const newEntity = new producersModel({
      ...req.body,
    });
    await newEntity.save();
    return res.status(201).send("New producer entity is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const createMovieEntity = async (req, res) => {
  try {
    const newEntity = new moviesModel({
      ...req.body,
    });
    await newEntity.save();
    return res.status(201).send("New movie entity is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};
