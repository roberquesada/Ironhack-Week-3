var net = require('net');
var port = 1702;
var server = net.createServer(function(connection) {
    console.log('Connection to %s open', port);
    connection.write('Hello?\r\n');
    connection.on('data', function(data) {
        if (String(data).trim() != 'hello') {
            connection.write('ERROR\r\n');
        } else {
            console.log('Connection to %s closed', port);
            connection.end('world\r\n');
        }
    });
});
server.listen(port);