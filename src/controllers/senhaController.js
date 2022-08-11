const { senhaRepository } = require('../repositories/index')

module.exports = {

  async getSenha (req, res) {
    try {
      const senhas = await senhaRepository.findAll()
      return res.status(200).json(senhas)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async insertSenha (req, res) {
    const newSenha = req.body
    try {
      const insertedSenha = await senhaRepository.insert(newSenha)
      return res.status(200).json(insertedSenha)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async updateSenha (req, res) {
    const newInfo = req.body
    const { id } = req.params
    try {
      const updatedSenha = await senhaRepository.update(newInfo, id)
      return res.status(200).json(updatedSenha)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async deleteSenha (req, res) {
    const { id } = req.params
    try {
      const deletedSenha = await senhaRepository.delete(id)
      return res.status(200).json(deletedSenha)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}
