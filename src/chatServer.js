
// Un servidor de ejemplo, con una muy simple aplicacion de chat.
// basado en NodeJS ...

// Para iniciar una coneccion con el servidor:
// $> telnet <ip-server> <puerto-server>
// Ejemplo: $> telnet localhost 2121

net = require('net');
var sockets = [];

var server = net.Server(function(socket) 
{
	sockets.push(socket);

	socket.on('data', function(data) 
	{
		for(var i=0; i<sockets.length; i++)
		{
			if (socket != sockets[i])
			{
				sockets[i].write(data);
			}
			//sockets[i].write(data);
		}
	});

	socket.on('end', function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i, 1);
	});
});

// Ponemos al servidor a escuchar por el puerto 2121
server.listen(2121);
