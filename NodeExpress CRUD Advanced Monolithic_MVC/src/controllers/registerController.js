const { User } = require("../models/User");

let registerController = (req,res)=>{

    const user = new User(req.body);
    
    user.save().then(d=>{
        res.status(200).json({
            mag:"Saved"
        });
    }).catch(e=>{
        res.status(400).json({
            mag:"Not Saved",
            error:e
        });
    });
}

module.exports = { registerController }