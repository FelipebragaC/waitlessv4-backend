const { Router } = require('express')
const painelController = require('../controllers/painelController.js')

const router = Router()

router
  .get('/painel', painelController.getPainel)
  .post('/painel', painelController.insertPainel)
  .put('/painel/:id', painelController.updatePainel)
  .delete('/painel/:id', painelController.deletePainel)


module.exports = router
