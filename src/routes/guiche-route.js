const { Router } = require('express')
const GuicheController = require('../controllers/guicheController.js')

const router = Router()

router
  .get('/guiche', GuicheController.getGuiches)
  .get('/guiche/:id', GuicheController.findGuiche)
  .post('/guiche', GuicheController.insertGuiche)
  .put('/guiche/:id', GuicheController.updateGuiche)
  .delete('/guiche/:id', GuicheController.deleteGuiche)

module.exports = router
