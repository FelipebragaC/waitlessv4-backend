const Repository = require('./repository.js')
const connection = require('../config/db.js')

class LoginRepository extends Repository {
  constructor () {
    super('CUSUARIO')
  }

  async findUser (infos) {
    try {
      const user = await connection(this.tableName).select('emailAddress', 'password').where({ emailAddress: infos })

      return user[0]
    } catch (error) {
      return error.message
    }
  }

  async findByEmail (email) {
    return await connection('CUSUARIO').select('*').where({ emailAddress: email })
  }

  // nao permitir emails repetidos
}
module.exports = LoginRepository
