const connection = require ('../config/db.js');
const {FilaRepository} = require('../repositories');
const filaRepository = new FilaRepository()

class FilaController {
  static async getQueue(req,res){
   try{
    const queues = await filaRepository.findAll()
    return res.status(200).json(queues)
  }
   catch (error) {
    return res.status(500).json(error.message)
  }
  }

  static async getSingleQueue(req,res){
    const {id} = req.params
    try{
      const singleQueue = await filaRepository.findById(id);
    return res.status(200).json(singleQueue);
  } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getQueueName(req,res){
    const {nome} = req.params
    try{
      const singleQueue = await filaRepository.getQueueByName(nome)
    return res.status(200).json(singleQueue);
  } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async deleteQueue(req,res){
    const {id} = req.params
    try{
    const deleteQueue = await filaRepository.delete(id);
    return res.status(200).json(deleteQueue);
    }catch (error) {
      return res.status(500).json(error.message)
    }
}

  static async updateQueue(req,res){
    const {id} = req.params
    const updatedInfos = req.body

    if(updatedInfos.estabelecimento){
    const idQueue = updatedInfos.estabelecimento
    const compare = await connection('CCLIENTE').select('id').where({id:idQueue})

    if(compare.length<1){
       const error = new Error('Estabelecimento não existe')
       return res.status(500).json(error.message)
      }}
    try{
    const updateQueue = await filaRepository.update(updatedInfos,id);
    return res.status(200).json(updateQueue);
    }catch (error) {
      return res.status(500).json(error.message)
    }
}

  static async insertQueue(req,res){
    const newQueueInfo = req.body
    const idQueue = newQueueInfo.estabelecimento
    const compare = await connection('CCLIENTE').select('id').where({id:idQueue})

    if(compare.length<1){
       const error = new Error('Estabelecimento não existe')
       return res.status(500).json(error.message)
      }

    try{
      const newQueue = await filaRepository.insert(newQueueInfo)
      return res.status(200).json(newQueue)
    }catch(error){
      return res.status(500).json(error.message)
    }
    }

}


module.exports = FilaController
