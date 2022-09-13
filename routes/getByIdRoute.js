import express from "express";
import {
  getActorById,
  getProducerById,
  getMovieById,
  getMovieByParticipants,
} from "../controllers/getByIdController.js";

const router = express.Router();

router.get("/actor/:id", getActorById);
router.get("/producer/:id", getProducerById);
router.get("/movie/:id", getMovieById);
router.get("/movie/participants/:id", getMovieByParticipants);

export default router;
