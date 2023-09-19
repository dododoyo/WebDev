// Import the express module
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the express application
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Define a route for the root URL path
app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname+"index.html");
})

app.post("/",function(req,res){
  // console.log(req.body.num1 + req.body.num2);
  result = Number(req.body.num1) + Number(req.body.num2);
  res.send("The result of calculation is "+ result);
})


// handling request with route bmiCalculator
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalc.html");
  // console.log(__dirname+"index.html");
});
app.post("/bmiCalculator", function(req, res){
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let bmi = (weight)/(height*height);
  res.send("Your BMI is "+ bmi);

})


// Start the server and listen on port 3000
app.listen(3000,function(){
  console.log("Server running on port 3000.");
});



/*1. Stop the currently running Node.js process that is using port 3000. You can do this by finding the process ID (PID) of the process using the following command: `sudo lsof -i :3000`. Then, use the PID to kill the process using the following command: `kill -9 <PID>`.

or use this 
sudo killall -9 node
*/
