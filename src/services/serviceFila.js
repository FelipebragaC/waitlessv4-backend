
const { filaRepository, clienteRepository } = require('../repositories')
const filaValidator = require('../helpers/validations/validationSchemas.js')

module.exports = {

  async updateQueueService (infos, id) {
    const result = await filaValidator.validateAsync(infos)
    if (result.error) { return result.error.message }

    if (infos.estabelecimento) {
      const idEstabelecimento = infos.estabelecimento
      const compare = await clienteRepository.findById(idEstabelecimento)

      if (compare.length < 1) {
        throw new Error('Estabelecimento não existe')
      }
    }
    return await filaRepository.update(infos, id)
  },

  async insertQueueService (infos) {
    const idEstabelecimento = infos.estabelecimento
    const compare = await clienteRepository.findById(idEstabelecimento)

    if (compare.length < 1) {
      throw new Error('Estabelecimento não existe')
    }
    return await filaRepository.insert(infos)
  }
}
