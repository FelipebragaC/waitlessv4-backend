const jwt = require('jsonwebtoken')
require('dotenv').config({ path: ('src/env/token.env') })

module.exports = {
  async authUser (req, res, next) {
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
}
