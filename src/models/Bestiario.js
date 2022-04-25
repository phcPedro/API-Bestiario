const mongoose = require('mongoose');

const bestiarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  hp: { type: String, required: true },
  lvl: { type: String, required: true },
});

const Bestiario = mongoose.model('Bestiario', bestiarioSchema, 'bestiario');

module.exports = Bestiario;
