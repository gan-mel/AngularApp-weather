const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../../config')[env];
var CircularJSON = require('circular-json');

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const AppID = '&appid=ccb590a0560985ff822bf94472c905cc';

// Get all posts
router.get('/getCity/:city', (req, res) => {
  const requestedCityName = req.params.city
  console.log("Got request " + requestedCityName)
  console.log(CircularJSON.stringify(req.params) + " Request") 


  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  //
  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+requestedCityName+'&appid=ccb590a0560985ff822bf94472c905cc')
  .then(weathers => {
     // console.log(res)
      console.log(CircularJSON.stringify(weathers.data + "  Weather Requested"))
      res.status(200).json(weathers.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  });

  router.get('/getCity/fiveday/:city', (req, res) => {
    const requestedCityNameF = req.params.city
    console.log("Got request " + requestedCityNameF)
    console.log(CircularJSON.stringify(req.params) + " Request") 

axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+requestedCityNameF+'&appid=ccb590a0560985ff822bf94472c905cc')
.then(forecast => {
   // console.log(res)
    console.log(CircularJSON.stringify(forecast.data + "  Forecast Requested"))
    res.status(200).json(forecast.data);
  })
  .catch(error => {
    res.status(500).send(error)
  });
});


module.exports = router;