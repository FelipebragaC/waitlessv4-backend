const connection = require('../config/db.js');
const Repository = require('./repository.js');

class FilaRepository extends Repository{
  constructor(){
    super('CFILA')
  }
async getQueueByName(name){
 return await connection(this.tableName).select('*').where({nome:name})
}
}


module.exports = FilaRepository
