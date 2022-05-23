const connection = require ('../config/db.js');

class FilaController {
  static async getQueue(req,res){
   try{
    const queues = await connection('CFILA').select('*')
    return res.status(200).json(queues)
  }
   catch (error) {
    return res.status(500).json(error.message)
  }
  }

  static async getSingleQueue(req,res){
    const Queue = req.params.id
    try{
      const singleQueue = await connection('CFILA').select('*').where({id:Queue});
    return res.status(200).json(singleQueue);
  } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getQueueName(req,res){
    const Queue = req.params.nome
    try{
      const singleQueue = await connection('CFILA').select('*').where({nome:Queue});
    return res.status(200).json(singleQueue);
  } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async deleteQueue(req,res){
    const idToDelete = req.params.id
    try{
    const deleteQueue = await connection('CFILA').delete().where({id:idToDelete});
    return res.status(200).json(deleteQueue);
    }catch (error) {
      return res.status(500).json(error.message)
    }
}

  static async updateQueue(req,res){
    const idToUpdate = req.params.id
    const updatedInfos = req.body
    console.log(updatedInfos.estabelecimento)

    if(updatedInfos.estabelecimento){
    const idQueue = updatedInfos.estabelecimento
    const compare = await connection('CCLIENTE').select('id').where({id:idQueue})

    if(compare.length<1){
       const error = new Error('Estabelecimento não existe')
       return res.status(500).json(error.message)
      }}
    try{
    const updateQueue = await connection('CFILA').update(updatedInfos).where({id:idToUpdate});
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
      const newQueue = await connection('CFILA').insert(newQueueInfo)
      return res.status(200).json(newQueue)
    }catch(error){
      return res.status(500).json(error.message)
    }
    }

}


module.exports = FilaController
