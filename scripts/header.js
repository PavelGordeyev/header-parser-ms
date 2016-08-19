function parseHeader(request,response){

	var headers = request.headers,
		regExp = /\(([^)]+)\)/,
		match = regExp.exec(headers['user-agent']),
		results = {
			"IP Address": '' + request.connection.localAddress,
			"language": headers['accept-language'].split(',')[0],
			"software": match[1]
		};

	response.writeHead(200,{'Content-Type': 'text/html'});
	response.write(JSON.stringify(results));
	response.end();	
}

module.exports.parseHeader = parseHeader;