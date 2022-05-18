const bodyParser = require ('body-parser');
const fila = require ('./fila-route');

module.exports = app =>{
  app.use(
    bodyParser.json(),
    fila


  )}
