import express from "express";
import {
  updateActorById,
  updateProducerById,
  updateMovieById,
} from "../controllers/updateByIdController.js";

const router = express.Router();

router.put("/actor/:id", updateActorById);
router.put("/producer/:id", updateProducerById);
router.put("/movie/:id", updateMovieById);

export default router;
