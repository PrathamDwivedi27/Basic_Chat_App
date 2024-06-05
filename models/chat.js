const mongoose=require('mongoose');

const ChatSchema =new mongoose.Schema({
    content:{
        type:String,
    },
    user:{
        type:String,
    },
    
    roomId:{
        type:String,
    }
})

const Chat=mongoose.model('Chat',ChatSchema);

module.exports=Chat;