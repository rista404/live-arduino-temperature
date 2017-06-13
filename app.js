const express = require('express')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(80)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
	console.log('Socket connected.')

	socket.on('temp:server', (data) => {
		console.log(data)

		io.emit('temp:in', Number(data))
	})
})
