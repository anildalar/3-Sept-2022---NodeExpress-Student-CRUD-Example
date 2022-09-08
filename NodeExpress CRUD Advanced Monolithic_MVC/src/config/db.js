//1. Connect with DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
.then(d=>{
    console.log('connected');
})
.catch(e=>{
    console.log('Not connected');
});


//Named Export
exports.mongoose = mongoose;