const { loginRepository } = require('../repositories')
const jwt = require('jsonwebtoken')

module.exports =
 userRole => async (req, res, next) => {
   const authHeader = req.headers.authorization
   const token = await authHeader && authHeader.split(' ')[1]
   const decoded = await jwt.verify(token, process.env.JWT_TOKEN)
   const user = await loginRepository.findByEmail(decoded.email)
   console.log('token do cargo:', user)
   console.log('admin', user[0].isSuperAdmin)
   let role = ''
   if (user[0].isSuperAdmin === true) { role = 'admin' } else { role = 'user' }

   if (userRole.indexOf(role) === -1) {
     res.status(403).send('Acesso nao permitido')
     res.end()
     return
   }
   next()
 }
