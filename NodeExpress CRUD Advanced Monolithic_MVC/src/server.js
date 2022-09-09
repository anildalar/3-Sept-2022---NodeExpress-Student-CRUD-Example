const express = require('express');
const app = express();

const env = require('dotenv');
const { studentRoute } = require('./routes/studentRoute');
const { registerRoute, loginRoute } = require('./routes/authRoute');

env.config();
let port = process.env.PORT || 6000;

//mongodb+srv://oklabs:letmein123321@oklabsmongodbserver.dgmru.mongodb.net/?retryWrites=true&w=majority

app.use(express.json());

app.use(studentRoute);
app.use('/api',registerRoute);
app.use('/api',loginRoute);

app.listen(port,()=>{
    console.log('listening on port',port)
});