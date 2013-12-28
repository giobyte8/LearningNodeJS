
/** 
 *  Tomado del articulo de IBM sobre Node JS, en la siguiente direccion:
 *  http://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/
 *
 *  La aplicacion es un API que genera numeros aleatorios entre '0' y el numero
 *  recibido de parte del usuario
 *
*/
 
// IMPORTAMOS LOS MODULOS NECESARIOS
var http = require('http');
var url  = require('url');


/**
 * Dado que creamos un web service, necesitaremos 'http', por otro lado
 * como en la mayoria de las peticiones http utilizaremos un request y response.
 * Esto seguramente le resulte familiar a la mayoria de desarrolladores PHP o Java.
*/
var server = http.createServer(function (request, response) 
{
    // La respuesta necesita adminstrar las cabeceras y tipo de respuestas
    // en servidores como Apache o Tomcat esto se hace automaticamente.
    response.writeHead(200, { "Content-Type" : "text/plain"});
    
    // Ahora recuperamos los parametros pasados desde el cliente a traves del request
    var params   = url.parse(request.url, true).query;
    var topLimit = params.number;
    
    // Ahora utilizando Javascript tradicional, creamos el numero random
    // que sera devuelto como respuesta al cliente.
    var limiteMayor = new Number(topLimit);
    var numRandom   = new Number(Math.random() * limiteMayor).toFixed(0);
    
    // Escribimos el resultado al objeto 'response'
    response.write(numRandom);
    
    // En NodeJS debemos terminar la conexion explicitamente, ya que node
    // nos permite mantener las conexiones abiertas por tiempo indefinido.
    response.end();
});

// Activamos el servidor en el puerto 2121
server.listen(2121);

// Mostramos un mensaje en consola para informar que el servidor esta
// corriendo apropiadamente.
console.log("Server generador de Randoms en ejecucion y escuchando por el puerto: 2121");