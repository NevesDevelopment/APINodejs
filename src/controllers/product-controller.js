'use strict'
//-----------------------------Carrega as Bibliotecas-------------------------------------//
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
//--------------------------------Criando CRUD-------------------------------------------//
exports.get = async(req, res) => {
    try{
        const data = await Product.find();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).jsend(e);
    }
}
exports.getByTypeProduct = async(req, res) => { 
    try{
        const data = await Product.find({typeProduct: req.params.typeProduct}, 'brand description location street price');
        res.status(200).send(data);
    } catch (e) {
        res.status(500).jsend(e);
    }
}
exports.post = async (req, res) => {
    
    try{
        var product = new Product(req.body);
        await product.save()
        res.status(201).send({
            message: 'Produto carregado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao cadastrar o produto',
            data: e  
        });
    }
}
exports.put = async(req, res) => {
    try{
        await Product.findOneAndUpdate(req.params.id, {
            $set: {
                brand: req.body.brand,
                description: req.body.description,
                price: req.body.price,
                typeProduct: req.body.typeProduct
            }
        }, {useFindAndModify: false});
        res.status(200).send({
                message: 'Produto atualizado com sucesso'
        });
    } catch (e) {
        res.status(500).jsend(e);
    }
}
exports.delete = async(req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id, {useFindAndModify: false});
        res.status(200).send({ message: 'Produto removido com sucesso' });
    } catch (e) {
        res.status(500).jsend(e);
    }
}
//----------------------------------------------------------------------------------------// 