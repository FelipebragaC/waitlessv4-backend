const connection = require('../config/db.js')

class Repository {
  constructor (tableName) {
    this.tableName = tableName
  }

  async findAll (where = {}) {
    return await connection(this.tableName).select('*').where({ ...where })
  }

  async findById (id) {
    return await connection(this.tableName).select('*').where({ id })
  }

  async delete (id) {
    const trx = await connection.transaction()
    try {
      const result = await connection(this.tableName).transacting(trx).delete().where({ id })
      return trx.commit(result)
    } catch (error) { trx.rollback() }
  }

  async insert (newInfo) {
    const trx = connection.transaction()
    try {
      const [id] = await connection(this.tableName).transacting(trx).insert({
        ...newInfo,
        createdAt: connection.fn.now(),
        updatedAt: connection.fn.now()
      })
        .returning('id')
      await trx.commit()
      return id
    } catch (error) { trx.rollback() }
  }

  async update (updatedInfo, id) {
    const trx = await connection.transaction()
    try {
      const result = await connection(this.tableName).transacting(trx)
        .update(updatedInfo)
        .update('updatedAt', connection.fn.now())
        .where({ id }).returning('*')

      return await trx.commit(result)
    } catch (error) { trx.rollback() }
  }
}

module.exports = Repository
