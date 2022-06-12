const { Router } = require('express')
const LoginController = require('../controllers/loginController')
const router = Router()

router
  .get('/login', LoginController.getUsers)

module.exports = router
