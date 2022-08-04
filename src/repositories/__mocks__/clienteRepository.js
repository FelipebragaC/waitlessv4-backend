const Repository = require('./repository.js')

class ClienteRepository {

  async findAll () {
    return {id:1,nome:'xablau',estabelecimento:3}
  }
}

module.exports = ClienteRepository
