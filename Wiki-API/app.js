require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

mongoose.connect(``,
  { useNewUrlParser: true }
);

const article = mongoose.model('article',{title:String,content:String});

app.get("/articles", function(req,res) {
  console.log('received request.');

  article.find({}).exec().then(function(foundItems){
    res.send(foundItems);
    console.log("Items Sent");
  });

});

app.delete('/articles',function(req,res){
  article.deleteMany({}).exec().then(function(err){
    if (err){
      console.log(err);
    }
    else{
      console.log('Succesfully deleted all articles');
    }
  })
})


/********************* -Route for all articles- **************************/

app.route('/articles')

  .get((req,res) =>{
    console.log("received request.");
    article.find({}).exec().then(function (foundItems) {res.send(foundItems);
        console.log("Items Sent");
      });
  })

  .delete((req,res) => {
    article.deleteMany({}).exec().then(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succesfully deleted all articles");
        }
      });
    
  })

  .post((req,res) => {

  }
  )


/***************** -Route for specific article - *******************/

app
  .route("/articles/:articleTitle")

  .get((req, res) => {
    article
      .findOne({ title: req.params.articleTitle })
      .exec()
      .then(function (foundItem) {
        if (foundItem) {
          res.send(foundItem);
        } else {
          console.log("can't find the specified item.");
        }
      });
  })
  .post((req, res) => {})
  .put((req, res) => {
    article.findOneAndUpdate(
      {title:req.params.articleTitle},
      {title:req.body.newTitle,content:req.body.newContent},
      {overwrite:true})
      .exec().then(function(err,results){
        if(!err){
          res.send('Succesfully updated content.');
        }

      });
  })
  .patch((req,res) =>{
    article.findOneAndUpdate(
      { title: req.params.articleTitle },
      { $set: {title:req.body.newTitle}},
      {new:true});
  })

  .delete((req, res) => {
    article
      .deleteOne({ title: req.params.articleTitle })
      .exec()
      .then(function (error){
        if (error) {
          res.send(error);} 
        else {
          res.send("Succesfully deleted blog with title " + req.params.articleTitle);}
      });
  });



app.listen(3000, function () {
  console.log("Listening on port 3000.");
});  
