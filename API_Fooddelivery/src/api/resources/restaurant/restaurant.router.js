const express = require('express');
import restaurantController from './restaurant.controller';
export const restaurantRouter = express.Router();

restaurantRouter.route('/add').post(restaurantController.signup);
restaurantRouter.route('/').get(restaurantController.findAll);
restaurantRouter.route('/:id').get(restaurantController.findByTransaction);
restaurantRouter.route('/:id').put(restaurantController.update);
restaurantRouter.route('/view/:id').get(restaurantController.findByTransaction);
// restaurantRouter.route('/').get(restaurantController.Hotel);