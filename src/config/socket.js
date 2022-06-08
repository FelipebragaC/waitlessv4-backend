const app = require('./app.js')
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  console.log('online', socket.id)
  // socket.broadcast.emit
})

module.exports = http
