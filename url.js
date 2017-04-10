let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer()
server.on('request', (request, response)=>{
	response.writeHead(200, {
	'Content-type': 'text/html; charset=utf-8'});
	let query = url.parse(request.url, true).query;
	
	if(query.name === undefined){
		
		
		response.write('bonjour vous êtes connecté en tant qu invité');
		
	}else{
		response.write('Bonjour ' +query.name);
		
	
    }
	response.end();
	
})	


server.listen(8080);



