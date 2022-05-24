const connection = require('../config/db.js');


class Repository {
  constructor(tableName){
      this.tableName = tableName
  }

  async findAll(where = {}) {
  return  await connection(this.tableName).select('*').where({...where})
  }

  async findById(id) {
    return  await connection(this.tableName).select('*').where({id})
    }

  async delete(id) {
    return  await connection(this.tableName).delete().where({id})
  }
   /*Criar o createdat e updatedat*/
  async insert(newInfo) {
    const [id] = await connection(this.tableName).insert(newInfo).returning('id')
    return id
  }
  /*Criar o updatedat*/
  async update(updatedInfo,id) {
    return  connection(this.tableName).update(updatedInfo).where({id})
  }
}


module.exports = Repository
