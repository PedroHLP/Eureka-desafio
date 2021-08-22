const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:appdata29@viacepteste.ljtxo.mongodb.net/Ceps?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;