'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaOffer = new Schema({
    brand: {
        type: String,
        required: true,
        trim: true
    },
    typeProduct:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    street:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', schemaOffer);