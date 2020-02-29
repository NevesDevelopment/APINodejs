'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaUser = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Customer', schemaUser);