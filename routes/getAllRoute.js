import express from "express";
import {
  getAllActors,
  getAllProducers,
  getAllMovies,
} from "../controllers/getAllController.js";

const router = express.Router();

router.get("/actors", getAllActors);
router.get("/producers", getAllProducers);
router.get("/movies", getAllMovies);

export default router;
