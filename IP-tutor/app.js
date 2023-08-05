const express = require('express');
const htp = require('https');

const port = 3000;
const app = express();

app.get('/',function(req,res)
{
  res.sendFile(__dirname+'/index.html');
})


app.post('/' , function(req,res)
{
  let cityName = req.body.
  let theURL ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=f86327ec920bb02b42d79a2c2692e00f&units=metric#";

  htp.get(theURL,function(response){
    // console.log(response);
    console.log('Status Code - '+response.statusCode);
    response.on('data',function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherCondition = weatherData.weather[0].description;
      const theIcon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/'+theIcon+'@2x.png';
      res.write(`<h1>The temprature in Adama is ${temp}</h1>`);
      res.write(`<h1>The weather condition is ` +
          weatherCondition+ `</h1>`);
      res.write("<img src=" + imageURL + ">");
      // console.log(theIcon);
      res.send(); 
      // console.log(weatherData);
    })
  });
  // response.send(apiResponse.quote);
})

app.listen(port,function(){
  console.log(`app is listening on port ${port}`);
})