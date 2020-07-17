const express = require('express');
import CategoryController from './category.controller';
import categoryController from './category.controller';
export const  CategoryRouter = express.Router();

CategoryRouter.route('/').get(categoryController.findAll);
CategoryRouter.route('/add').post(categoryController.signup);