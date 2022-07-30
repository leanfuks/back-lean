const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const peinadoSchema = new Schema({
    modelo: {
        type: String,
        required: true,
    },
    corte: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    }
});
const Peinado= mongoose.model('Peinado',peinadoSchema);

module.exports={Peinado}