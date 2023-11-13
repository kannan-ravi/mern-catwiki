import express from 'express'
const router = express.Router();

import catBreedController from '../controllers/catBreedController.js';

router.route('/')
  .get(catBreedController.catBreedController)

router.route('/:id')
  .get(catBreedController.catBreedControllerWithID)

export default router