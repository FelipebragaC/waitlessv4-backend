const { painelRepository } = require('../repositories')

module.exports = {
  async getPainel (req, res) {
    try {
      const showPainel = await painelRepository.findAll()
      return res.status(200).json(showPainel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  },

  async updatePainel (req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      const updatedPainelInfos = await painelRepository.update(newInfo, id)
      res.status(200).json(updatedPainelInfos)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async deletePainel (req, res) {
    const { id } = req.params
    try {
      const deletedPainel = await painelRepository.delete(id)
      res.status(200).json(deletedPainel)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async insertPainel (req, res) {
    const painelInfos = req.body

    try {
      const newPainel = await painelRepository.insert(painelInfos)
      res.status(200).json(newPainel)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}
