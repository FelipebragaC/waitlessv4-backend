const { loginRepository } = require('../repositories/index')

const serviceLogin = require('../services/serviceLogin.js')
require('dotenv').config({ path: ('src/env/token.env') })

const loginController = {
  async getUsers (req, res) {
    try {
      const Users = await loginRepository.findAll()
      return res.status(200).json(Users)
    } catch (err) { res.status(500).json(err.message) }
  },

  async getByEmail (req, res) {
    const email = req.body.emailAddress
    try {
      const userEmail = await loginRepository.findByEmail(email)
      return res.status(200).json(userEmail)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async insertUser (req, res) {
    const infos = req.body
    try {
      const newUser = serviceLogin.insertUser(infos)
      return res.status(200).json(newUser)
    } catch (err) { res.status(500).json(err.message) }
  },

  async getSingleUser (req, res) {
    const { id } = req.params
    try {
      const singleUser = await loginRepository.findById(id)
      return res.status(200).json(singleUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  },

  async signIn (req, res) {
    const { emailAddress, password } = req.body

    try {
      const logado = await serviceLogin.signIn({ emailAddress, password })
      return res.status(200).json(logado)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  async getUserName (req, res) {
    const { emailAddress } = req.params
    try {
      const singleUser = await loginRepository.findUser(emailAddress)
      return res.status(200).json(singleUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = loginController
