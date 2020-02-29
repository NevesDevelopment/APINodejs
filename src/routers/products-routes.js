'use strict'
//-----------------------------Carrega as Bibliotecas-------------------------------------//
const express = require('express');
//----------------------------------------------------------------------------------------//
const controller = require('../controllers/product-controller');
//----------------------------------------------------------------------------------------//
const router = express.Router();
//--------------------------------Criando rotas-------------------------------------------//
router.get('/', controller.get);
router.get('/:typeProduct', controller.getByTypeProduct);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
//----------------------------------------------------------------------------------------//
module.exports = router;
//----------------------------------------------------------------------------------------//