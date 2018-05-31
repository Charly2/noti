
const server = require('http').createServer();

const io = require('socket.io')(server, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});


io.on('connect', function(socket) {
	console.log(socket);
	socket.emit('s',{s:'juan'});
 	 console.log("se conecto");
});






server.listen(3000);

