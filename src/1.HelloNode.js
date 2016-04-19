
/**
 * Basic web server
 *
 * Sends "Hello world" to each request
 */

var http = require('http')

/**
 * This function is executed on each server request.
 *
 * @param Object request The received request
 * @param Object response Response object to send to client
 */ 
function handleRequest(request, response) {
    
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello world</h1>')    
}


//
// Create and start http server
http.createServer(handleRequest).listen(3000)
console.log('Server listening on port 3000')    
