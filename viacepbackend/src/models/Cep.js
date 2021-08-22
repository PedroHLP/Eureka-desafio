const mongoose = require("mongoose");

const Cep = new mongoose.Schema({
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
    ibge: String,
    gia: String,
    ddd: String,
    siafi: String, 
});

module.exports = mongoose.model('Cep', Cep);