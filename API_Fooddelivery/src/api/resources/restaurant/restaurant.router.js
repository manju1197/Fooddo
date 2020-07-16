const express = require('express');
import restaurantController from './restaurant.controller';
export const restaurantRouter = express.Router();

restaurantRouter.route('/add').post(restaurantController.signup);
restaurantRouter.route('/').get(restaurantController.findAll);