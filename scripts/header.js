function parseHeader(request,response){

	var headers = request.headers,
		regExp = /\(([^)]+)\)/,
		match = regExp.exec(headers['user-agent']), // Get software from header that is between parentheses
		results = {
			"IP Address": '' + request.connection.localAddress,
			"language": headers['accept-language'].split(',')[0],
			"software": match[1]
		};

	response.writeHead(200,{'Content-Type': 'application/json'});
	response.write(JSON.stringify(results));
	response.end();	
}

module.exports.parseHeader = parseHeader;