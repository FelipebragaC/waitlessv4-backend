const { loginRepository } = require('../repositories')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: ('src/env/token.env') })

module.exports = {
  async insertUser (infos) {
    const hashpass = await bcrypt.hash(infos.password, 10)
    return await loginRepository.insert(
      {
        fullName: infos.fullName,
        emailAddress: infos.emailAddress,
        isSuperAdmin: infos.isSuperAdmin,
        password: hashpass,
        estabelecimento: infos.estabelecimento
      }
    )
  },

  async signIn (infos) {
    const email = await infos.emailAddress
    const pass = await infos.password
    try {
      const { emailAddress, password } = await loginRepository.findUser(email)

      if (!emailAddress) {
        throw new Error('Email não existe')
      }
      const validpass = await bcrypt.compare(pass, password)
      console.log('validpass', validpass)

      if (!validpass) {
        throw new Error('Senha inválida')
      }
      const token = jwt.sign({ email, pass },
        process.env.JWT_TOKEN
        , { expiresIn: '1h' })

      return token
    } catch (error) {
      return error.message
    }
  }

}
