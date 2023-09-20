// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const htp = require('https');

// Setting up port and express app
const port = 3000;
const app = express();

// Using body-parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

// Setting up route for homepage
app.get('/',function(req,res) 
{
  res.sendFile(__dirname+'/index.html');
})

// Setting up route for handling POST requests
app.post('/' , function(req,res)
{
  let dataIn = req.body;
  let cityName = dataIn.city;
  
  let theURL ="";

  // Sending GET request to OpenWeatherMap API
  htp.get(theURL,function(response){
    console.log('Status Code - '+response.statusCode);

    // Handling response data
    response.on('data',function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherCondition = weatherData.weather[0].description;
      const theIcon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/'+theIcon+'@2x.png';

      // Sending response to client
      res.write(`<h1>The temprature in `+ cityName +` is ${temp}</h1>`);
      res.write(`<h1>The weather condition is ` + weatherCondition+ `</h1>`);
      res.write("<img src=" + imageURL + ">");
      res.send(); 
    })
  });
})

// Starting server
app.listen(port,function(){
  console.log(`app is listening on port ${port}`);
})
