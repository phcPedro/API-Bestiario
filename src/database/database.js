const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/bestiario-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
}

module.exports = connectToDatabase;
