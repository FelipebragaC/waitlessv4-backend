const bodyParser = require ('body-parser');
const fila = require ('./fila-route');
const cliente = require('./cliente-route')

module.exports = app =>{
  app.use(
    bodyParser.json(),
    fila,
    cliente


  )}
