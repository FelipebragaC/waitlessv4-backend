const connection = require('../config/db.js');


class Repository {
  constructor(tableName) {
    this.tableName = tableName
  }

  async findAll(where = {}) {
    return await connection(this.tableName).select('*').where({ ...where })
  }

  async findById(id) {
    return await connection(this.tableName).select('*').where({ id })
  }

  async delete(id) {
    await connection.transaction(async deletes => {
    return await connection(this.tableName).delete().where({ id })
    })
  }

  async insert(newInfo) {
    await connection.transaction(async insert => {
    const [id] = await connection(this.tableName).insert({
      ...newInfo,
      createdAt: connection.fn.now(),
      updatedAt: connection.fn.now()
    })
      .returning('id');
    return id})
  }

  async update(updatedInfo, id) {
    await connection.transaction(async update => {
    return connection(this.tableName).update(updatedInfo).update('updatedAt', connection.fn.now()).where({ id }).returning('*')
    });
  }

}


module.exports = Repository
