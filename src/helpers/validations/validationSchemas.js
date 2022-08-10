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

const clienteValidator = Joi.object().keys({
  nome: Joi.string().required().messages({
    'string.base': '"nome" should be a type of \'text\'',
    'string.empty': '"nome" cannot be an empty field'
  }),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  cpf: Joi.number(),
  cnpj: Joi.number(),
  telefone: Joi.number(),
  whatsapp: Joi.number(),
  responsavel: Joi.string()
})

module.exports = { filaValidator, clienteValidator }
