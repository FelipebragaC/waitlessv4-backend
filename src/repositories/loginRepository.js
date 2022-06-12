const Repository = require('./repository')

class LoginRepository extends Repository {
  constructor () {
    super('CUSUARIO')
  }
// nao permitir emails repetidos
}
module.exports = LoginRepository
