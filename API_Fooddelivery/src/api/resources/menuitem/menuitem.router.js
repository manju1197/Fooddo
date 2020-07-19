
const express = require('express');
import menuitemController from './menuitem.controller';
export const MenuRouter = express.Router();

MenuRouter.route('/').get(menuitemController.findAll);
MenuRouter.route('/list').post(menuitemController.create);
MenuRouter.route('/:id').get(menuitemController.findOne);