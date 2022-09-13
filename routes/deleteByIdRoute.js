import express from "express";
import {
  deleteActorById,
  deleteProducerById,
  deleteMovieById,
} from "../controllers/deleteByIdController.js";

const router = express.Router();

router.delete("/actor/:id", deleteActorById);
router.delete("/producer/:id", deleteProducerById);
router.delete("/movie/:id", deleteMovieById);

export default router;
