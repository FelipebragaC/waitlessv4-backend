const { Router } = require('express')
const FilaController = require('../controllers/filaController')

const router = Router()

router
  .get('/filas', FilaController.getQueue)
  .get('/filas/:id', FilaController.getSingleQueue)
  .get('/filas/nome/:nome', FilaController.getQueueName)
  .delete('/filas/:id', FilaController.deleteQueue)
  .put('/filas/:id', FilaController.updateQueue)
  .post('/filas', FilaController.insertQueue)
module.exports = router
