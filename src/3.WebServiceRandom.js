
/**
 * A webservice that generates random integers
 * between 0 and a top limit as URL parameter
 */

var http = require('http')
var url  = require('url')

/**
 * This function is executed on each server request.
 *
 * @param Object req The received request
 * @param Object res Response object to send to client
 */
function handleRequest(req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'})

  //
  // Recover url param 'top'
  var params = url.parse(req.url, true).query
  var topNum = params.top

  // Generate random integer
  var random = new Number(Math.random() * +topNum).toFixed(0)

  // Send generated random Number
  res.write(random)
  res.end()
}

//
// Start server and listen on port 3000
var server = http.createServer(handleRequest).listen(3000)

console.log('Random Webservice listening on port: 3000')
console.log(' * You can test at "http://localhost:3000?top=3550"')
