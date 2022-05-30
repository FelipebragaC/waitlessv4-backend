const {Router} = require('express');
const ClienteController = require ('../controllers/clienteController.js')

const router = Router();

router
.get('/cliente',ClienteController.getClients)




module.exports=router
