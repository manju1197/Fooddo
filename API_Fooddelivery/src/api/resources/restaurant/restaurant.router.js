const express = require('express');
import restaurantController from './restaurant.controller';
export const restaurantRouter = express.Router();

restaurantRouter.post('/vendor',restaurantController.signup);