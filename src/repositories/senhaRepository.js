const Repository = require('./repository.js')

class SenhaRepository extends Repository {
  constructor () {
    super('FSENHA')
  }
}

module.exports = SenhaRepository
