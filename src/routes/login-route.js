const { Router } = require('express')
const { authUser } = require('../auth/userAuthentication.js')
const LoginController = require('../controllers/loginController')
const role = require('../auth/roles.js')
const router = Router()

router
  .get('/login', [authUser, role(['admin', 'superadmin'])], LoginController.getUsers)
  .get('/login/email', LoginController.getByEmail)
  .get('/login/:id', LoginController.getSingleUser)
  .get('/login/nome/:emailAddress', LoginController.getUserName)
  .post('/login', LoginController.insertUser)
  .post('/login/signin', LoginController.signIn)

module.exports = router
