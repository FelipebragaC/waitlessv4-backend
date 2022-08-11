const bodyParser = require('body-parser')
const fila = require('./fila-route')
const cliente = require('./cliente-route')
const senha = require('./senha-route')
const login = require('./login-route')
const guiche = require('./guiche-route')
const painel = require('./painel-route')

module.exports = app => {
  app.use(

    bodyParser.json(),
    fila,
    cliente,
    senha,
    login,
    guiche,
    painel

  )
}
