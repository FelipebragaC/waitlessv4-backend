const app = require('./config/app.js')
const routes = require('./routes')

routes(app)
app.listen(3000, () => console.log('server running http://localhost:3000'))
