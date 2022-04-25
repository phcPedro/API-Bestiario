const { default: mongoose } = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id da besta não encontrada!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const bestiario = req.body;
  if (
    !bestiario ||
    !bestiario.nome ||
    !bestiario.descricao ||
    !bestiario.hp ||
    !bestiario.lvl
  ) {
    return res
      .status(400)
      .send({
        message:
          'Precisa fornecer todas as informações da besta, preencha todos os campos!',
      });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
