'use strict'
//-----------------------------Carrega as Bibliotecas-------------------------------------//
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
//--------------------------------Criando CRUD-------------------------------------------//
exports.get = async(req, res) => {
    try{
        const data = await Customer.find();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).jsend(e);
    }
}
exports.post = async (req, res) => {
    
    try{
        var customer = new Customer(req.body);
        await customer.save()
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
        await Customer.findOneAndUpdate(req.params.id, {
            $set: {
                email: req.body.email,
                password: req.body.password
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
        await Customer.findByIdAndRemove(req.params.id, {useFindAndModify: false});
        res.status(200).send({ message: 'Produto removido com sucesso' });
    } catch (e) {
        res.status(500).jsend(e);
    }
}
//----------------------------------------------------------------------------------------// 