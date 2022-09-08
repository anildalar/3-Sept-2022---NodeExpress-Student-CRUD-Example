const express = require('express');
const app = express();

const env = require('dotenv');
const { userSchema,mongoose } = require('./models/User');

env.config();
let port = process.env.PORT || 6000;

//mongodb+srv://oklabs:letmein123321@oklabsmongodbserver.dgmru.mongodb.net/?retryWrites=true&w=majority



app.use(express.json());







app.post('/student',(req,res)=>{

    //Lets create the model
   
    const User = mongoose.model('User', userSchema);


    const user = new User({
        firstName:"3",
        lastName:"3",
        email:"3@gmail.com",
        username:"3",
        password_hash:"abc123456",
        role:'teacher'
    });

    user.save()
    .then(d=>{
        console.log('Saved');
        res.status(200).json({
            msg:"Saved",
            data:req.body
        });
    })
    .catch(e=>{
        console.log('Failed to save',e)
        res.status(400).json({
            msg:"Not save",
            error:e
        });
    });
    
    
});

app.listen(port,()=>{
    console.log('listening on port',port)
});