const bodyParser = require('body-parser')
const fila = require('./fila-route')
const cliente = require('./cliente-route')
const senha = require('./senha-route')
const login = require('./login-route')

module.exports = app => {
  app.use(

    bodyParser.json(),
    fila,
    cliente,
    senha,
    login

  )
}
