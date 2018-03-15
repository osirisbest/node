let net = require('net');
let client = new net.Socket();
client.setEncoding('utf8');
// установка соединения с сервером
client.connect ('8124','localhost', ()=> {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});
// подготовка к вводу данных с терминала
process.stdin.resume();
// отправка данных при их получении на сервер
process.stdin.on('data', function (data) {
    client.write(data);
});
// при полученииответных данных вывод их на консоль
client.on('data',function(data) {
    console.log(data);
});
// при закрытиии сервера
client.on('close',function() {
    console.log('connection is closed');
});