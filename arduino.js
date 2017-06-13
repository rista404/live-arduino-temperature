// const io = require('socket.io')(5555)
const socket = require('socket.io-client')('http://207.154.248.133')
const SerialPort = require('serialport')

const port = new SerialPort('/dev/cu.wchusbserial1420', {
	parser: SerialPort.parsers.readline('\n')
})

port.on('data', function (data) {
	console.log('Data: ' + data);
	socket.emit('temp:server')
});
