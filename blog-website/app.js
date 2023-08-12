const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const _ = require('lodash');

let listOfPosts = [];
const app = express();

const homeStartingContent ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure obcaecati voluptatem qui quia beatae deserunt quidem alias fugiat ipsum assumenda voluptate impedit animi ab quod veniam hic natus, id vitae sint officia magni dicta labore officiis. Fugit maiores nemo voluptatem natus ratione, laborum ullam quasi voluptas, cumque itaque aperiam at, eius tenetur sequi eveniet exercitationem et repudiandae. At natus, adipisci pariatur quisquam repellat eius eos quidem harum dolorum voluptatem labore. Omnis quod iure eos quaerat ipsum corrupti quae suscipit tempora.";

const aboutStartingContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa nihil animi ex officiis quidem praesentium, quaerat, ut laudantium debitis magnam delectus. Odio saepe, eum dicta provident numquam aperiam, debitis blanditiis tenetur asperiores expedita iste! Id eum placeat non sunt? Maiores quod labore ullam ea optio doloribus, reprehenderit excepturi animi.";

const contactStartingContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, animi sed! Eligendi at repudiandae praesentium dignissimos ipsum magni vitae nam, fugit asperiores! Voluptatem, assumenda ipsam animi explicabo, possimus vel eaque delectus ipsum odio, sit consectetur praesentium sapiente tempora ea dolorem. Officia pariatur vitae consequatur consectetur odio vero quisquam in eveniet quam ratione explicabo, officiis quis ut, eos qui eum? Recusandae?";

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('home',{homeContent:homeStartingContent,postList:listOfPosts});
  // res.render()
});

app.get('/contact',function(req,res){
  
  res.render('contact',{contactContent:contactStartingContent});
  // res.render()
});

app.get('/about',function(req,res){
  
  res.render('about',{aboutContent:aboutStartingContent});
  // res.render()
});

app.get('/compose',function(req,res){
  
  res.render('compose');
  // res.render()
});

app.get('/listOfPosts/:postName', function(req,res){

  const requestedTitle = _.lowerCase(req.params.postName);

  listOfPosts.forEach(function(eachPost){
    let insideTitle = _.lowerCase(eachPost.title);
    if(requestedTitle === insideTitle){
      // console.log('Match Found');
      res.render('post',{eachPost:eachPost});
    }
  });
})

app.post('/',function(req,res){
  if (req.body.nextPostButton === 'toBePublished'){
    const thePost = {title:req.body.publishTitle,content:req.body.publishContent}
    listOfPosts.push(thePost);
    // console.log(listOfPosts);
    res.redirect("/");
  }
});

app.listen(3000,function(){
  console.log('Server started on port 3000');
});

