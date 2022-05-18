const { Router } = require('express');
const FilaController = require('../controllers/filaController');

const router = Router();

  router
  .get('/filas',FilaController.getQueue)
  module.exports = router
