const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user){
    const timestamp= new Date().getTime();
    return jwt.encode({sub:user.id,iat:timestamp},config.key)
}

exports.signin= function(req,res,next){
    res.send({token:tokenForUser(req.user)})
}

exports.signup = function(req,res,next){
    const email = req.body.email;
    const password = req.body.password;
   
    if(!email || !password){
        return res.status(422).send({error:'You must provide an email and password'})
        }
    //see if a user with the given email exist
    User.findOne({email:email},function(err,existinguser){
        if(err){
            return next(err)
        }
        if(existinguser){
            return res.status(422).send({error:'Email is in use'})
        }
    })
    const user = new User({
        email:email,
        password:password
    })
    user.save(function(err){
        if(err){
            return next(err)
        }
        res.json({token:tokenForUser(user)});
        
    })
}