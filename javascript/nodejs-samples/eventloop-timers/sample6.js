// close callback phase

const net = require('net');
const server = net.createServer((socket) => {    

    
    socket.on('close',() => {
        console.log('Socket closed');
        
    });
});

server.listen(8000);