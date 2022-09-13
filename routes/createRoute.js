import express from "express";
import {
  createActorEntity,
  createProducerEntity,
  createMovieEntity,
} from "../controllers/createController.js";

const router = express.Router();

router.post("/actor", createActorEntity);
router.post("/producer", createProducerEntity);
router.post("/movie", createMovieEntity);

export default router;
