const { Router } = require('express')
const filaController = require('../controllers/filaController')

const router = Router()

router
  .get('/filas', filaController.getQueue)
  .get('/filas/:id', filaController.getSingleQueue)
  .get('/filas/nome/:nome', filaController.getQueueName)
  .delete('/filas/:id', filaController.deleteQueue)
  .put('/filas/:id', filaController.updateQueue)
  .post('/filas', filaController.insertQueue)
module.exports = router
