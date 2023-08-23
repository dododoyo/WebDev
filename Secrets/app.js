require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const findOrCreate = require('mongoose-findorcreate');
// const passportLocal = require('passport-local'); 
const passportLocalMongoose = require('passport-local-mongoose');
const googleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret:process.env.SECRETCODE  ,
  resave:false,
  saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session()); 

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true}).then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connect to MongoDB", err));

// mongoose.set('useCreateIndex',true);

const userSchema = new mongoose.Schema({
  email:String,
  password:String}); 

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const user = mongoose.model('user',userSchema); 


passport.use(user.createStrategy());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
passport.use(
  new googleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:'http://localhost:3000/auth/google/secrets',
    userProfileURL:'https://www.googleapis.com/oauth2/v3/userinfo'
  },function(accessToken,refreshToken,profile,cb){
    user.findOrCreate({googleId:profile.id},function(err,user){

    })
  })
);

app.route('/')

.get(function(req,res){
  res.render('home');
})


app.route('/auth/google')

.get(function(req,res){
  console.log('Heading to google.');
  passport.authenticate('google',{scope:['profile']});
})

app.get('/auth/google/secrets',
passport.authenticate('google',{failureRedirect:'/login'}),function(req,res){
  res.redirect('/secrets');
})

app.route('/auth/google')
  .get(function(req, res, next) {
    console.log('Heading to Google for authentication.');
    passport.authenticate('google', { scope: ['profile'] });
  });

/*app.route('/secrets')
.get(function(req,res){
  if(req.isAuthenticated()){
    res.render('secrets');
  }
  else{
    res.redirect('/login');
  }
});*/

app.route('/login')

.get(function(req,res){
  res.render('login');
})

.post(function(req,res){ 
  const newUser = new user({
    username:req.body.username,
    password:req.body.password
  });
  req.login(newUser,function(err){
    if(err){
      console.log(err);
    }
    else{
      passport.authenticate('local')(req,res,function(){
        res.redirect('/secrets');
      });
    }
  });
})

app.route("/register")

  .get(function (req, res) {
    res.render("register");
  })

  .post(function (req, res) {
    user.register({username:req.body.username},req.body.password,function(err,user){
      if(err){
        console.log(err);
        res.redirect('/register');}
      else{
        passport.authenticate('local')(req,res,function(){
          res.redirect('/secrets');})}
    });
  });

app.route("/logout")
  .get(function (req, res) {
    req.logout(function (err) {
    if (err) {
      console.log(err);
    }
    else{
    res.redirect("/");}
  });
});

app.listen(process.env.PORT ,function(){console.log(`Server listening on port ${process.env.PORT}.`)});

