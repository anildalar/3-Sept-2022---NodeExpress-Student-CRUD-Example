const { userSchema } = require('../models/User');
//HOF 
let studentController = (req,res)=>{
    //Lets create the model 
   
    const user = new User({
        firstName:req.body.firstName,
        'lastName':req.body.lastName,
        "email":req.body.email,
        username:req.body.username,
        password_hash:req.body.password_hash,
        role:req.body.role
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
}

module.exports = { studentController }