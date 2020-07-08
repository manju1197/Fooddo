import '@babel/polyfill';
const express = require('express');
const app = express();
const PORT = 3001;
import {restRouter} from './api';
import mongoose, { Collection } from'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

mongoose.Promise =global.Promise;

mongoose.connect('mongodb://localhost/foodorder', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());
app.use('/api',restRouter);
// app.use('/api',restRouter);
app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status = 404;
    error.message = "Invalid route";
    next(error);
});
app.use((error,req,res,next) => {
        res.status(error.status || 500);
        return res.json({
            error:{
                message:error.message
            }

        })
});

app.get('/' , (req,res) => {
    res.json({
        msg:'Welcome to online food order FoodAPI '
    })
   
})
app.use(function(res,req,next){
    console.log("middleware before api call");
    next();
})
app.listen(PORT,() => {
    console.log(`Server is running at port number ${PORT}`);
})