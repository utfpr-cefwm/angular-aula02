const express = require('express');

const turmasRouter = require('./api/turmas');

const API_PORT = 3001;
const API_PATH = 'api';

const app = express();

app.use(`/${API_PATH}/turmas`, turmasRouter);

app.listen(API_PORT, () => {
  console.log(`
    Servidor executando em http://localhost:${API_PORT}/${API_PATH}
  `);
});
