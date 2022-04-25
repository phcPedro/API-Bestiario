const route = require('express').Router();
const controllerBestiario = require('../controllers/bestiario.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/bestiario.middleware');

route.get('/all-bestiario', controllerBestiario.findAllBestiario);
route.get('/:id', validId, controllerBestiario.findByIdBestiario);
route.delete('/delete/:id', validId, controllerBestiario.deleteBestiario);
route.put('/update/:id', validId, controllerBestiario.updateBestiario);
route.post('/creat', validObjectBody, controllerBestiario.createBestiario);

module.exports = route;
