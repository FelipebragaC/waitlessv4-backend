const { FilaRepository } = require('../repositories')
const { ClienteRepository } = require('../repositories')
const filaRepository = new FilaRepository();
const clienteRepository = new ClienteRepository();

module.exports = {

  async updateQueueService(infos,id) {
    if (infos.estabelecimento) {
      const idEstabelecimento = infos.estabelecimento
      const compare = await clienteRepository.findById(idEstabelecimento)

      if (compare.length < 1) {
        throw new Error('Estabelecimento não existe')
      }
 }
    return await filaRepository.update(infos,id);
  },

  async insertQueueService(infos){
  const idEstabelecimento = infos.estabelecimento
  const compare = await clienteRepository.findById(idEstabelecimento)

    if (compare.length < 1) {
      throw new Error('Estabelecimento não existe')
    }
    return await filaRepository.insert(infos)
    }

}

