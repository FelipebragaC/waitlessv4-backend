const { LoginRepository } = require('../repositories')
const loginRepository = new LoginRepository()

class LoginController {
  static async getUsers (req, res) {
    try {
      const Users = await loginRepository.findAll()
      return res.status(200).json(Users)
    } catch (err) { res.status(500).json(err.message) }
  }
}

module.exports = LoginController
