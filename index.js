const express=require('express');
const http = require('http');
const socketio=require('socket.io'); 
const PORT=3002;

const app=express();
const server = http.createServer(app);
const io=socketio(server);

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);          //every time we get a unique id

    socket.on('msg_send',(data)=>{      //jo hum value bhej rhe hai wo data hai
        console.log(data);
        io.emit('msg_received',data);  //ab iska on udhar banayenge
    })


});


app.use('/',express.static(__dirname+'/public'));   //to attach static files like html and css

server.listen(PORT,()=>{                            //becoz jo app tha wo express se hum server run kar rhe the lekin hume socket ke se server run karana hai
    console.log('Server started at port',PORT);
})