const { Router } = require('express')
const { authUser } = require('../auth/userAuthentication.js')
const LoginController = require('../controllers/loginController')
const router = Router()

router
  .get('/login', authUser, LoginController.getUsers)
  .get('/login/:id', LoginController.getSingleUser)
  .get('/login/nome/:emailAddress', LoginController.getUserName)
  .post('/login', LoginController.insertUser)
  .post('/login/signin', LoginController.signIn)

module.exports = router
