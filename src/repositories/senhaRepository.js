<<<<<<< HEAD

const connection = require('../config/db.js')
const TABLENAME = 'FSENHA'
module.exports = {

  async findAll (where = {}) {
    const result = await connection(TABLENAME).select('*').where({ ...where })
    return result
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
=======
const connection = require('../config/db.js')
const tableName = 'FSENHA'

module.exports = {

async findAll (where = {}) {
  return await connection(tableName).select('*').where({ ...where })
},

async findById (id) {
  return await connection(tableName).select('*').where({ id })
},

async delete (id) {
  const trx = await connection.transaction()
  try {
    const result = await connection(tableName).transacting(trx).delete().where({ id })
    return trx.commit(result)
  } catch (error) { trx.rollback() }
},

async insert (newInfo) {
  const trx = await connection.transaction()
  try {
    const [id] = await connection(tableName).transacting(trx).insert({
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
>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
  }
},

async update (updatedInfo, id) {
  const trx = await connection.transaction()
  try {
    const result = await connection(tableName).transacting(trx)
      .update(updatedInfo)
      .update('updatedAt', connection.fn.now())
      .where({ id }).returning('*')

    return await trx.commit(result)
  } catch (error) { trx.rollback() }
}
}
<<<<<<< HEAD
=======

>>>>>>> 2267a590fba64c0667f9ebb9af3cc5e73bbe34de
