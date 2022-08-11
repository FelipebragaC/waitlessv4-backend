const { Router } = require('express')
const clienteController = require('../controllers/clienteController.js')

const router = Router()

router
  .get('/cliente', clienteController.getClients)
  .post('/cliente', clienteController.insertClient)
  .put('/cliente/:id', clienteController.updateClient)
  .delete('/cliente/:id', clienteController.deleteClient)

module.exports = router
