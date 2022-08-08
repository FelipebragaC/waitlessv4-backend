const {clienteRepository} = require('../repositories')

module.exports = {
  async getClients (req, res) {
    try {
      const showClients = await clienteRepository.findAll()
     return  res.status(200).json(showClients)
    } catch (error) {
     return  res.status(500).json(error.message)
    }
  },

  async updateClient (req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      const updatedClientInfos = await clienteRepository.update(newInfo, id)
      res.status(200).json(updatedClientInfos)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async deleteClient (req, res) {
    const { id } = req.params
    try {
      const deletedClient = await clienteRepository.delete(id)
      res.status(200).json(deletedClient)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async insertClient (req, res) {
    const clientInfos = req.body

    try {
      const newClient = await clienteRepository.insert(clientInfos)
      res.status(200).json(newClient)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

