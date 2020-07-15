import express from 'express';
import { userRouter} from './resources/user/user.router';
import { restaurantRouter } from './resources/restaurant/restaurant.router';
import { MenuRouter} from './resources/menuitem/menuitem.router';


export const restRouter = express.Router();
restRouter.use('/users',userRouter);
restRouter.use('/restaurant',restaurantRouter);
restRouter.use('/menu',MenuRouter);