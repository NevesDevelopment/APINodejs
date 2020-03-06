'use strict'
//-----------------------------Carrega as Bibliotecas-------------------------------------//
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//----------------------------------------------------------------------------------------//
const app = express();
//--------------------------------Carrega models------------------------------------------//
const Product = require('./Models/product');
const customers = require('./Models/customer');
//--------------------------------Carrega rotas-------------------------------------------//
mongoose.connect('mongodb+srv://NevesDevelopment:197720@ofertaapp-g1ilh.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });
//--------------------------------Carrega rotas-------------------------------------------//
const indexRoute = require('./routers/index-routes');
const productRoute = require('./routers/products-routes');
const customerRoute = require('./routers/customer-routes');
//-----------------  Converte o conteudo para  json e codifica a url----------------------//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//----------------------------------------------------------------------------------------//
app.use(cors());
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
//----------------------------------------------------------------------------------------//
module.exports = app;
//----------------------------------------------------------------------------------------//