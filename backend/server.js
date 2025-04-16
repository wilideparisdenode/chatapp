
const express=require('express');
const path=require('path');
const app =express();
const http=require('http');
const server=http.createServer(app);
const io=require('socket.io')(server);
app.use(express.static(path.join(__dirname,'public')));

io.on('connection',function(socket){
    socket.on('newuser',function(username){
        socket.broadcast.emit("update",username+" joined the conversation")
    })
    socket.on('exitusr',function(username){
        socket.broadcast.emit("update",username+" exited the conversation")
    })
    socket.on('chat',function(message){
        socket.broadcast.emit("chat",message);
    })
})

server.listen(9000,()=>{console.log('i am listening to port'+9000)});
