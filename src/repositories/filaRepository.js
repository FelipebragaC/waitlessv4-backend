const connection = require('../config/db.js')
const TABLENAME = 'CFILA'

module.exports = {

  async findAll (where = {}) {
    return await connection(TABLENAME).select('*').where({ ...where })
  },

  async findById (id) {
    return await connection(TABLENAME).select('*').where({ id })
  },

  async delete (id) {
    const trx = await connection.transaction()
    try {
      const result = await connection(TABLENAME).transacting(trx).delete().where({ id })
      return trx.commit(result)
    } catch (error) { trx.rollback() }
  },

  async insert (newInfo) {
    const trx = await connection.transaction()
    try {
      const [id] = await connection(TABLENAME).transacting(trx).insert({
        ...newInfo,
        createdAt: connection.fn.now(),
        updatedAt: connection.fn.now()
      })
        .returning('id')
      await trx.commit()
      return id
    } catch (error) {
      console.error(error.code, error.detail)
      trx.rollback()
    }
  },

  async update (updatedInfo, id) {
    const trx = await connection.transaction()
    try {
      const result = await connection(TABLENAME).transacting(trx)
        .update(updatedInfo)
        .update('updatedAt', connection.fn.now())
        .where({ id }).returning('*')

      return await trx.commit(result)
    } catch (error) { trx.rollback() }
  },

  async getQueueByName (name) {
    return await connection(TABLENAME).select('*').where({ nome: name })
  }
}
