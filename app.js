// Create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = '8800';

const server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type': 'text/html'});
	response.write("Hello World!");
	response.end();	
}).listen(port,hostname,function(){
	console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
});