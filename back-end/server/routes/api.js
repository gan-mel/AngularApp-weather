const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const jsan = require('jsan');
//TODO: set up the settings in a seperate file
const config = require('../../config')[env];

//http requests library
const axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const AppID = '&appid=ccb590a0560985ff822bf94472c905cc';

 //TODO for both: read from constants and make sure it returns 500 if the you get a 404 from the API
 // Get the current weather json /weather
router.get('/getCity/:city', (req, res) => {
  const requestedCityName = req.params.city
  console.log("Got request " + requestedCityName)
  console.log(req.params + " Request") 

 
  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+requestedCityName+'&units=metric&appid=ccb590a0560985ff822bf94472c905cc')
  .then(weathers => {
     // console.log(res)
      console.log(weathers.data + "  Weather Requested")
      res.status(200).json(weathers.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  });


// Get the five day weather json /forecast  
  router.get('/getCity/fiveday/:city', (req, res) => {
    const requestedCityNameF = req.params.city
    console.log("Got request " + requestedCityNameF)
    console.log(req.params + " Request") 

axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+requestedCityNameF+'&units=metric&appid=ccb590a0560985ff822bf94472c905cc')
.then(forecast => {
   
   if(forecast.data.cod.indexOf('404') > -1 ){
// console.log(forecast.data.cod.indexOf('404') + " Index")
    res.status(500).send(error)
    console.log(forecast.data + "  Forecast Requested")
  } else{
    res.status(200).json(forecast.data);
  }
  })
  .catch(error => {
    res.status(500).send(error)
  });
});


module.exports = router;