//aqui haremos toda la configuacion del servidor

const express = require('express');
const morgan = require('morgan');
const cors=require('cors');
const app = express();


//configuraciones
app.set('port',process.env.PORT||3000);


//middleawares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//rutas
app.use(require('../routes/app'));




module.exports = app;