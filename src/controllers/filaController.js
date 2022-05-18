const connection = require ('../config/db.js');


class FilaController {
  static async getQueue(req,res){
   const queues = await connection('CFILA').select('nome')
   return res.status(200).json(queues)
  }


}


module.exports = FilaController
