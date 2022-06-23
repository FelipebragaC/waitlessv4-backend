const { Router } = require('express')
const LoginController = require('../controllers/loginController')
const router = Router()

router
  .get('/login', LoginController.authUser, LoginController.getUsers)
  .get('/login/:id', LoginController.getSingleUser)
  .get('/login/nome/:emailAddress', LoginController.getUserName)
  .post('/login', LoginController.insertUser)
  .post('/login/signin', LoginController.signIn)

module.exports = router
