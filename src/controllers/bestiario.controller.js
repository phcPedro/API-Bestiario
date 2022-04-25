const res = require('express/lib/response');
const bestiarioService = require('../services/bestiario.service');

const findAllBestiario = async (req, res) => {
  const allBestiario = await bestiarioService.findAllBestiario();
  if (allBestiario.length == 0) {
    return res.status(404).send({ message: 'Esse bestiario está vazio.' });
  }

  res.send(allBestiario);
};

const findByIdBestiario = async (req, res) => {
  const bestiarioId = req.params.id;
  const choiceBestiario = await bestiarioService.findBestiarioById(bestiarioId);
  res.send(choiceBestiario);
};

const createBestiario = async (req, res) => {
  const bestiario = req.body;
  const newBestiario = await bestiarioService.createBestiario(bestiario);
  res.status(201).send(newBestiario);
};

const updateBestiario = async (req, res) => {
  const bestiarioId = req.params.id;
  const edit = req.body;
  const upBestiario = await bestiarioService.updateBestiario(bestiarioId, edit);
  res.send(upBestiario);
};
const deleteBestiario = async (req, res) => {
  const bestiarioId = req.params.id;
  await bestiarioService.deleteBestiario(bestiarioId);
  res.send({ message: 'Criatura excluido com êxito!' });
};

module.exports = {
  findAllBestiario,
  findByIdBestiario,
  createBestiario,
  updateBestiario,
  deleteBestiario,
};
