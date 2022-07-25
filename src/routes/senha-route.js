const { Router } = require('express')
const SenhaController = require('../controllers/senhaController.js')

const router = Router()

router
  .get('/senhas', SenhaController.getSenha)

module.exports = router
