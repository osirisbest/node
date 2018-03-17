let events = require('events')
let em = new events.EventEmitter()
let counter=0
setInterval(()=> { em.emit('timed', counter++); }, 3000);
em.on('timed', function(data) {
    console.log('timed ' + data);
});