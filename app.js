const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(80)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

io.on('connection', (socket) => {
	console.log('Socket connected.')
	// socket.emit('news', { hello: 'world' })

	setInterval(() => {
		socket.emit('temp:in', random(-12, 45))
	}, 2000)

	socket.on('temp:server', (data) => {
		console.log(data)
	})
})
