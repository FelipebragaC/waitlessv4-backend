const connection = require('../config/db.js');
const { FilaRepository } = require('../repositories');
const serviceFila = require('../services/serviceFila.js');
const filaRepository = new FilaRepository();

class FilaController {
  static async getQueue(req, res) {
    try {
      const queues = await filaRepository.findAll()
      return res.status(200).json(queues)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getSingleQueue(req, res) {
    const { id } = req.params
    try {
      const singleQueue = await filaRepository.findById(id);
      return res.status(200).json(singleQueue);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getQueueName(req, res) {
    const { nome } = req.params
    try {
      const singleQueue = await filaRepository.getQueueByName(nome)
      return res.status(200).json(singleQueue);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async deleteQueue(req, res) {
    const { id } = req.params
    try {
      const deleteQueue = await filaRepository.delete(id);
      return res.status(200).json(deleteQueue);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateQueue(req, res) {
    const { id } = req.params
    const updatedInfos = req.body
    try {

     const updated = await serviceFila.updateQueueService(updatedInfos, id)
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insertQueue(req, res) {
    const newQueueInfo = req.body

    try {
  const inserted = await serviceFila.insertQueueService(newQueueInfo)
      return res.status(200).json(inserted)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}


module.exports = FilaController
