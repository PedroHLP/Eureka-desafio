const Cep = require('../models/Cep');
const axios = require('axios');

exports.createCep = async function(req, res){
    const { cep } = req.params;

    if(!cep) return res.status(400).json({"error": "cep must be provided"});

    const formatCep = cep.split('-');
    const cepFormatted = formatCep.join('');

    if(cepFormatted.length != 8) return res.status(400).json({"error": "cep doesnt exists"});

    try{
        const findCep = await Cep.findOne({"cep": cep});

        if(!findCep){
            axios.get(`https://viacep.com.br/ws/${cepFormatted}/json/`)
            .then(response =>{
                const data = response.data;
                if(data.erro){
                    return res.status(400).json({"error": "cep doesnt exists"});
                }

                Cep.create(data);

                return res.status(200).json({"cepInfo": data});
            })
        }else{
            return res.json({'cepInfo': findCep});
        }
    }catch(err){
        return res.json(500).json({"error": "something wrent wrong"});
    }
};