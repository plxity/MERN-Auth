const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');
const requireauth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local', { session: false });
module.exports= function(app){
    app.get('/',requireauth,function(req,res){
        res.send({hi:'there'})
    })
    app.post('/signin',requireSignin,Auth.signin);
   app.post('/signup',Auth.signup)
}