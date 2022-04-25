const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/bestiario.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();


connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/bestiario', routes);

app.listen(port, () =>{
    console.log(`Sevidor rodando em http://localhost:${port}`);
});
