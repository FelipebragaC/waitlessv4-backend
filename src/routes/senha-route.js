const { Router } = require('express')
const senhaController = require('../controllers/senhaController.js')

const router = Router()

router
  .get('/senhas', senhaController.getSenha)

module.exports = router
