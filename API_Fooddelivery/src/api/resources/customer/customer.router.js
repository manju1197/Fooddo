const express = require('express');
import customerController from './customer.controller';
export const CustomerRouter = express.Router();
CustomerRouter.route('/').get(customerController.findAll);
CustomerRouter.route('/add').post(customerController.signup);
CustomerRouter.route('/:id').put(customerController.update);