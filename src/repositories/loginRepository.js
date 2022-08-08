
const { connection } = require('../config/db')
const TABLENAME = 'CUSUARIO'

const loginRepository = {

  async findUser(infos) {
    const user = await connection(TABLENAME).select('emailAddress', 'password').where({ emailAddress: infos })
    return user[0]

  },

  async findAll(where = {}) {
    return { id: 1, nome: 'xablau', estabelecimento: 3 }
  },

  async findById(id) {
    return await connection(tableName).select('*').where({ id })
  },

  async delete(id) {
    const trx = await connection.transaction()
    try {
      const result = await connection(tableName).transacting(trx).delete().where({ id })
      return trx.commit(result)
    } catch (error) { trx.rollback() }
  },

  async insert(newInfo) {
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
    }
  },

  async update(updatedInfo, id) {
    const trx = await connection.transaction()
    try {
      const result = await connection(tableName).transacting(trx)
        .update(updatedInfo)
        .update('updatedAt', connection.fn.now())
        .where({ id }).returning('*')

      return await trx.commit(result)
    } catch (error) { trx.rollback() }
  },

  async findUser(infos) {
    try {
      const user = await connection(tableName).select('emailAddress', 'password').where({ emailAddress: infos })

      return user[0]
    } catch (error) {
      return error.message
    }
  },

  async findByEmail(email) {
    return await connection(TABLENAME).select('*').where({ emailAddress: email })
  }

  // nao permitir emails repetidos
}


module.exports = { loginRepository }
