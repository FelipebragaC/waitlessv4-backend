const Repository = require('./repository.js')

class ClienteRepository extends Repository {
  constructor () {
    super('CCLIENTE')
  }
}

module.exports = ClienteRepository
