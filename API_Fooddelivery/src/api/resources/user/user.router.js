const express = require('express');
import userController from './user.controller';

 export const 
 userRouter = express.Router();
 userRouter.post('/signup',userController.signup);
 userRouter.post('/login',userController.login);
 userRouter.route('/')
 .post(userController.create)
 .get(userController.findAll);

 userRouter.route('/:id')
 .get(userController.findOne)
 .put(userController.update);
//  userRouter.get('/users',userController.findAll);
//  userRouter.post('/users',userController.create);