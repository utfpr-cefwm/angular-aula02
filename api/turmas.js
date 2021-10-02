const express = require('express');
const router = express.Router();

const TURMAS = [
  {
    "_id": "fafafafafa",
    "disciplina": {
      "codigo": 'WEB01',
      "nome": 'Fundamentos do Desenvolvimento Web',
    },
    "ano": 2021,
    "periodo": 1,
    "alunos": [
      {
        "codigo": 1234,
        "nome": 'João da Silva',
      },
      {
        "codigo": 1235,
        "nome": 'Maria Joana Pereira',
      },
      {
        "codigo": 1231,
        "nome": 'Oswaldo Siqueira',
      },
    ],
  },
  {
    "_id": "fbfbfbfbfb",
    "disciplina": {
      "codigo": 'WEB02',
      "nome": 'Introdução aos Frameworks',
    },
    "ano": 2021,
    "periodo": 2,
    "alunos": [
      {
        "codigo": 4567,
        "nome": 'Antonio Jose da Silva',
      },
      {
        "codigo": 4563,
        "nome": 'Jose Abreu',
      },
      {
        "codigo": 4565,
        "nome": 'Katarina Couves',
      },
    ],
  },
];

router.get('/', function(req, res, next) {
  res.json([
    ...TURMAS.map(t => ({
      _id: t._id,
      disciplina_codigo: t.disciplina.codigo,
      ano: t.ano,
      periodo: t.periodo,
      alunos_total: t.alunos.length,
    })),
  ]);
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.json(TURMAS.find(t => t._id === id));
});

module.exports = router;
