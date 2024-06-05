const express=require('express');
const PORT=3002;
const http = require('http');
const socketio=require('socket.io'); 
const connect=require('./config/database-config');


const Chat=require('./models/chat');

const app=express();
const server = http.createServer(app);
const io=socketio(server);

io.on('connection', (socket) => {
    // console.log('a user connected',socket.id);          //every time we get a unique id

    socket.on('join_room',(data)=>{
        socket.join(data.roomid)
    })

    socket.on('msg_send',async (data)=>{      //jo hum value bhej rhe hai wo data hai
        console.log(data);
        const chat=await Chat.create({
            roomId:data.roomid,
            user:data.username,
            content:data.msg
        })
        io.to(data.roomid).emit('msg_received',data);  //ab iska on udhar banayenge
    })

    socket.on('typing',(data)=>{
        socket.broadcast.to(data.roomid).emit('someone_typing');            //except sender others will see typing
    })

});

app.set('view engine', 'ejs');

app.use('/',express.static(__dirname+'/public'));   

app.get('/chat/:roomid',async (req,res)=>{
    const chats= await Chat.find({
        roomId:req.params.roomid
    }).select('content user')
    console.log(chats);
    res.render('index',{
        name:'Pratham',
        id:req.params.roomid,
        chats:chats
    });
})

server.listen(PORT,async ()=>{                           
    console.log('Server started at port',PORT);
    await connect();
    console.log('Mongodb connected');
})