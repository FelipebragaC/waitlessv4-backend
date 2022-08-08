const { connection } = require('../config/db')
const TABLENAME = 'CUSUARIO'

const loginRepository = {

  async findUser (infos) {
    const user = await connection(TABLENAME).select('emailAddress', 'password').where({ emailAddress: infos })
    return user[0]
  },

  async findByEmail (email) {
    return await connection(TABLENAME).select('*').where({ emailAddress: email })
  }

  // nao permitir emails repetidos
}

module.exports = { loginRepository }
