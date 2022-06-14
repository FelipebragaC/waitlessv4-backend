const { LoginRepository } = require('../repositories')
const loginRepository = new LoginRepository()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
        'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTI0MDI0NSwiaWF0IjoxNjU1MjQwMjQ1fQ.8eAMPUfIJ2HCwzRcktVyEFj1l1CZy-ljoSFAl-R9M68'
        , { expiresIn: '1h' })

      return token
    } catch (error) {
      return error.message
    }
  }

}
