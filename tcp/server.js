let net = require('net');
let server = net.createServer(function(conn) {
    console.log('connected');
    conn.on('data',  data=> {
        console.log(data + ' от ' + conn.remoteAddress + ' ' +
            conn.remotePort);
        conn.write('Repeating: ' + data);
    });
    conn.on('close', function() {
        console.log('client closed connection');
    });
}).listen(8124);
console.log('listening on port 8124');