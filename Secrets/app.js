require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true}).then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
  email:String,
  password:String});

/*console.log(process.env.SECRETCODE);
console.log(process.env.PORT);
console.log(process.env.DB_URL);*/

userSchema.plugin(encrypt,{secret:process.env.SECRETCODE,encryptedFields:['password']});

const user = mongoose.model('user',userSchema); 

app.get('/',function(req,res){
  res.render('home');
})

app.route('/login')

.get(function(req,res){
  res.render('login');
})

.post(function(req,res){
  const username = req.body.username;
  const userPassword = req.body.password;

  user.findOne({email:username}).exec().then(function(foundUser){
    if (foundUser){
      if (foundUser.password === userPassword){res.render('secrets');}
      else{console.log('Password incorrect.');}
      
    }
    else{
      console.log("Can't find the user");
      res.render('login');
    }})
})


app.route('/register')

.get(function(req,res){
  res.render("register");
})

.post(function(req,res){
  const newUser = new user({email:req.body.username,password:req.body.password});

  newUser.save()
  res.render("secrets");
})

app.listen(process.env.PORT ,function(){console.log(`Server listening on port ${process.env.PORT}.`)});