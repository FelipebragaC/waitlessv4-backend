const { Router } = require('express')
const ClienteController = require('../controllers/clienteController.js')

const router = Router()

router
  .get('/cliente', ClienteController.getClients)
  .post('/cliente', ClienteController.insertClient)
  .put('/cliente/:id', ClienteController.updateClient)
  .delete('/cliente/:id', ClienteController.deleteClient)

module.exports = router
