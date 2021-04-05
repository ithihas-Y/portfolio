
const express = require('express')
const path = require('path')
const app = express()
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

//app.use(express.static(path.join(__dirname, 'build')));

let messages=[];


io.on('connection',(socket)=>{
  
  console.log('new ws connection'+socket.id);
  socket.on('button',(arg)=>{
    messages.push(arg);
    console.log(messages);
    io.emit('all',messages);
  });

  socket.emit('new',messages);

})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

server.listen(8080,()=>{
  console.log('http://localhost:8080');
})
