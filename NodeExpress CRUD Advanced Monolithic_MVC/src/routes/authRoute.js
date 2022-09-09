

const express = require('express');
const { registerController } = require('../controllers/registerController');
const { myValidator } = require('../validators/validator');
const registerRoute = express.Router();
const loginRoute = express.Router();


registerRoute.post('/register',myValidator,registerController);

loginRoute.post('/login',(req,res)=>{
    res.status(200).json({
        msg:'Login Route'
    });
});

module.exports = {registerRoute,loginRoute }