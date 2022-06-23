const { LoginRepository } = require('../repositories')
const loginRepository = new LoginRepository()
const serviceLogin = require('../services/serviceLogin.js')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: ('src/env/token.env') })

class LoginController {
  static async getUsers (req, res) {
    try {
      const Users = await loginRepository.findAll()
      return res.status(200).json(Users)
    } catch (err) { res.status(500).json(err.message) }
  }

  static async insertUser (req, res) {
    const infos = req.body
    try {
      const newUser = serviceLogin.insertUser(infos)
      return res.status(200).json(newUser)
    } catch (err) { res.status(500).json(err.message) }
  }

  static async getSingleUser (req, res) {
    const { id } = req.params
    try {
      const singleUser = await loginRepository.findById(id)
      return res.status(200).json(singleUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async authUser (req, res, next) {
    const authHeader = req.headers.authorization
    const token = await authHeader && authHeader.split(' ')[1]
    console.log(token)

    if (token === null) { res.status(401) }
    try {
      const result = await jwt.verify(token, process.env.JWT_TOKEN)
      req.result = result
    } catch (error) { return res.status(401).json(error.message) }
    next()
  }

  static async signIn (req, res) {
    const { emailAddress, password } = req.body

    try {
      const logado = await serviceLogin.signIn({ emailAddress, password })
      return res.status(200).json(logado)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  static async getUserName (req, res) {
    const { emailAddress } = req.params
    try {
      const singleUser = await loginRepository.findUser(emailAddress)
      return res.status(200).json(singleUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = LoginController
