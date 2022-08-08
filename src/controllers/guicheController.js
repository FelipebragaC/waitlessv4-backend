const {guicheRepository} = require('../repositories')

module.exports = {
  async getGuiches (req, res) {
    try {
      const showGuiches = await guicheRepository.findAll()
     return  res.status(200).json(showGuiches)
    } catch (error) {
     return  res.status(500).json(error.message)
    }
  },

  async updateGuiche (req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      const updatedGuicheInfos = await guicheRepository.update(newInfo, id)
      res.status(200).json(updatedGuicheInfos)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async deleteGuiche (req, res) {
    const { id } = req.params
    try {
      const deletedGuiche = await guicheRepository.delete(id)
      res.status(200).json(deletedGuiche)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async insertGuiche (req, res) {
    const guicheInfos = req.body
    try {
      const newGuiche = await guicheRepository.insert(guicheInfos)
      res.status(200).json(newGuiche)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },
    async findGuiche (req,res){
      const {id} = req.params
      try{
        const guiche = await guicheRepository.findById(id)
        res.status(200).json(guiche)
      }catch(error){
        res.status(500).json(error.message)}
    }

}

