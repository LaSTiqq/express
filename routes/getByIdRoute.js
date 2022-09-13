import express from "express";
import {
  getActorById,
  getProducerById,
  getMovieById,
} from "../controllers/getByIdController.js";

const router = express.Router();

router.get("/actor/:id", getActorById);
router.get("/producer/:id", getProducerById);
router.get("/movie/:id", getMovieById);

export default router;
