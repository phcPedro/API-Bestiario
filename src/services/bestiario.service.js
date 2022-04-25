const Bestiario = require('../models/Bestiario');
const bestas = require('../models/Bestiario');

const findAllBestiario = async () =>{
    const bestiario = await bestas.find();
    return bestiario;
};

const createBestiario = async (newBestiario) =>{
    const createdBestiario = await Bestiario.create(newBestiario);
    return createdBestiario;
};

const findBestiarioById = async (id) =>{
   const bestiario = await Bestiario.findById(id);
   return bestiario;
}

const updateBestiario = async (id, bestiarioEdited) =>{
    const bestiarioUpdated =  await Bestiario.findByIdAndUpdate(id, bestiarioEdited);
    return bestiarioUpdated;
}

const deleteBestiario = async (id) =>{
  return await Bestiario.findByIdAndDelete(id);
}
 
module.exports = {
    findAllBestiario,
    findBestiarioById,
    createBestiario,
    updateBestiario,
    deleteBestiario
};
