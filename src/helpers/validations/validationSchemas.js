const Joi = require('joi')

const filaValidator = Joi.object().keys({
  nome: Joi.string().required().messages({
    'string.base': '"nome" should be a type of \'text\'',
    'string.empty': '"nome" cannot be an empty field'
  }),
  sigla: Joi.string().empty(''),
  ultimasenha: Joi.number(),
  ultimasenhaLebel: Joi.number(),
  estabelecimento: Joi.number()
})

module.exports = filaValidator
