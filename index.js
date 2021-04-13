

const express= require('express');
const app=express();
const bodyParser=require('body-parser');
require('./utils/database')
const imagesRoutes=require('./routes/images.routes')
var cors = require('cors');
var path = require('path');
global.appRoot = path.resolve(__dirname);

app.use(cors()); // middleware  for origin isssue resolver

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});



app.use(express.json()); // midleware for getting(parse) data , if we dont use it we can not get data in req.body Object
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static(path.join(__dirname, './uploads')));

app.use(imagesRoutes);



const port = process.env.PORT || 3000;
const host =  process.env.HOST || 'localhost';

app.listen(port , () => console.log(`Server running on ${host}:${port} `));