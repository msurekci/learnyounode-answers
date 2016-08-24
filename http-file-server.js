var http = require('http');
var fs = require('fs');

let port = process.argv[2];
let filePath = process.argv[3];

var server = http.createServer((request, response) => {
	let readStream = fs.createReadStream(filePath);

	readStream.on('open', () => {
		readStream.pipe(response);
	});
}).listen(port);

