
// Un servidor de ejemplo, con una muy simple aplicacion de chat.
// basado en NodeJS ...

var net = require('net');

var server = net.createServer(function(socket)
{
	socket.write('hello\n');
	socket.write('world\n');

	socket.on('data', function(data) 
	{
		socket.write(data);
	});
});

// Ponemos al servidor a escuchar por el puerto 2121
server.listen('2121');