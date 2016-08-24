var net = require('net');
var strftime = require('strftime')

var server = net.createServer(function(socket){
	let data = strftime('%F %H:%M', new Date());
	socket.end(data + '\n');
});

server.listen(process.argv[2]);