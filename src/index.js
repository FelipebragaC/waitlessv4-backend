const app = require('./config/app.js')
const routes = require('./routes')
const http = require('./config/socket.js')

routes(app)

http.listen(3000, () => console.log('server running http://localhost:3000'))
