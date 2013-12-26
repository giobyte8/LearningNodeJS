
// HolaMundo con node JS.

// Creamos un servidor que responde con un saludo a cada peticion http

var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, { 'Content-Type' : 'text/plain'});
	response.end('Hola mundo ... Saludando desde NodeJS\n');
}).listen(2121);

console.log("Server en ejecucion en http://transferoncloud:2121");