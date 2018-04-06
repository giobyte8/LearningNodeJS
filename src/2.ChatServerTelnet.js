
/**
 * A basic chat server
 *
 * How to use?
 * 1. Open a terminal and type: 'telnet <server-ip> <server-port>'
 *    Sample: ~> telnet localhost 2121
 * 2. Write message and type enter to send to each chat connected user
 *
 * Type command from as many client machines as you want and each
 * machine will be a chat user.
 */

var net = require('net')
var sockets = []

var server = net.Server(function (socket) {

  sockets.push(socket)

  //
  // when user sends data through his socket
  // forward message to each connected user.
  socket.on('data', function(data) {
    for (var i=0; i< sockets.length; i++) {
      if (socket != sockets[i]) {
        sockets[i].write(data)
      }
    }
  })

  //
  // when user disconnects, remove the socket from
  // array and inform to remaining users.
  socket.on('end', function() {
    var socketIndex = sockets.indexOf(socket)
    sockets.splice(i, 1)

    for (var i=0; i< sockets.length; i++) {
      var msg = 'A user just leave the chat'
      msg += ' | Connected users: ' + sockets.length
      sockets[i].write(msg)
    }
  })

})

//
// Start chat server on port 2121
server.listen(2121)
console.log('Chat server listening on port 2121')
console.log(' * Connect with "telnet localhost 2121"')
