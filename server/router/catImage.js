import express from "express";
const router = express.Router();

import catImageController from "../controllers/catImageController.js";

router.route("/:id").get(catImageController.catBreedImagewithID);

export default router;
