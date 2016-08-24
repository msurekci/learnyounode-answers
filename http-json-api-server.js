var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer((request, response) => {
	let parsedUrl = url.parse(request.url, true);
	let { pathname, query } = parsedUrl;

	let time = new Date(query.iso);

	if(pathname === '/api/parsetime'){
		let responseObject = {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
		}

		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(responseObject));
	}

	if(pathname === '/api/unixtime'){
		let responseObject = { unixtime: time.getTime() }

		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(responseObject));
	}
}).listen(port);