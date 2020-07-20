const express = require('express');
import orderController from './order.controller';
export const OrderRouter = express.Router();

OrderRouter.route('/').get(orderController.findAll);
OrderRouter.route('/add').post(orderController.signup);
OrderRouter.route('/:id').get(orderController.findOne);