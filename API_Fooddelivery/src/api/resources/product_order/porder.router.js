const express = require('express');
import productController from './porder.controller';
export const ProductRouter = express.Router();

ProductRouter.route('/').get(productController.findAll);
ProductRouter.route('/add').post(productController.signup);
ProductRouter.route('/:id').get(productController.findOne);
ProductRouter.route('/myorder/:id').get(productController.findByTransaction);
ProductRouter.route('/hotelorder/:id').get(productController.findByOrder);