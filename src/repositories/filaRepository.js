const connection = require('../config/db.js')
<<<<<<< HEAD
const TABLENAME = 'CFILA'

module.exports = {

  async findAll (where = {}) {
    return await connection(TABLENAME).select('*').where({ ...where })
  },

  async findById (id) {
    return await connection(TABLENAME).select('*').where({ id })
=======
const tableName = 'CFILA'

module.exports= {
  async findAll (where = {}) {
    return await connection(tableName).select('*').where({ ...where })
  },

  async findById (id) {
    return await connection(tableName).select('*').where({ id })
>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
  },

  async delete (id) {
    const trx = await connection.transaction()
    try {
<<<<<<< HEAD
      const result = await connection(TABLENAME).transacting(trx).delete().where({ id })
=======
      const result = await connection(tableName).transacting(trx).delete().where({ id })
>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
      return trx.commit(result)
    } catch (error) { trx.rollback() }
  },

  async insert (newInfo) {
    const trx = await connection.transaction()
    try {
<<<<<<< HEAD
      const [id] = await connection(TABLENAME).transacting(trx).insert({
=======
      const [id] = await connection(tableName).transacting(trx).insert({
>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
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
<<<<<<< HEAD
      const result = await connection(TABLENAME).transacting(trx)
=======
      const result = await connection(tableName).transacting(trx)
>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
        .update(updatedInfo)
        .update('updatedAt', connection.fn.now())
        .where({ id }).returning('*')

      return await trx.commit(result)
    } catch (error) { trx.rollback() }
  },

  async getQueueByName (name) {
<<<<<<< HEAD
    return await connection(TABLENAME).select('*').where({ nome: name })
  }
}
=======
    return await connection(tableName).select('*').where({ nome: name })
  }
}

>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
