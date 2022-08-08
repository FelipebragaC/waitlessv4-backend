const { Router } = require('express')
const { authUser } = require('../auth/userAuthentication.js')
const loginController = require('../controllers/loginController')
const role = require('../auth/roles.js')
const router = Router()

router
  .get('/login', [authUser, role(['admin', 'superadmin'])], loginController.getUsers)
  .get('/login/email', loginController.getByEmail)
  .get('/login/:id', loginController.getSingleUser)
  .get('/login/nome/:emailAddress', loginController.getUserName)
  .post('/login', loginController.insertUser)
  .post('/login/signin', loginController.signIn)

module.exports = router
