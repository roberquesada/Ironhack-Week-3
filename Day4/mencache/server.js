var net = require('net');
var port = 11312;
var database = {};
var server = net.createServer(function(connection) {
    console.log('Connection to %s open', port);

    connection.on('data', function(data) {
        var response = String(data).trim();

        function method (response)
        {
            return response.split(' ')[0];
        }

        function set (response) {
            return response.split(' ');
        }


        if (method(response) == 'set')
        {
            database[set(response)[1]] = set(response)[2]
            connection.write("STORED")

        }

        if (method(response) == 'get')
        {
            connection.write('VALUE ' + database[set(response)[1]])
        }


        // else if (method == 'get') {

        //     connection.write(database[response_arr[1]])

        // }

        // if (String(data).trim() != 'hello') {
        //     connection.write('ERROR\r\n');
        // } else {
        //     console.log('Connection to %s closed', port);
        //     connection.end('world\r\n');
        // }
    });
});
server.listen(port);