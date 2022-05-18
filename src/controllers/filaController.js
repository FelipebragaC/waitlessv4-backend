const { default: knex } = require('knex');
const db = require ('../config/db.js');


class FilaController {
  static async getQueue(req,res){
   const queues = knex('CFILA').select('nome')
   return res.status(200).json(queues)
  }


}


module.exports = FilaController
