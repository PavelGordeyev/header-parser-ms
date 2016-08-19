
// Create a web server
const http = require('http');
const header = require('./scripts/header.js');

const hostname = '0.0.0.0';
const port = process.env.PORT;

const server = http.createServer(function(request,response){
	header.parseHeader(request,response);
}).listen(port,hostname,function(){
	console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
});