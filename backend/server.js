const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const weatherAPI = require("./weatherAPI");
const airqualityAPI = require("./airqualityAPI");
const weatherObj = require('./weatherObj');
const port = 5000;
const pollenAPI = require("./pollenAPI");


app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.post('/weather', (req, response) =>{
    const origin = { lat: req.body.Latitude, long: req.body.Longitude};
   

    weatherAPI.getWeather(origin)
    .then(response =>{
        weatherObj.temp_c = response.current.temp_c;
        weatherObj.temp_f = response.current.temp_f;
        weatherObj.currentCondition = response.current.condition.text;
        weatherObj.wind_mph = response.current.wind_mph;
        weatherObj.wind_dir = response.current.wind_dir;
        weatherObj.pressure_in = response.current.pressure_in;
        weatherObj.precip_in = response.current.precip_in;
        weatherObj.humidity = response.current.humidity;
        weatherObj.cloud = response.current.cloud;
        weatherObj.feelslife_f = response.current.feelslife_f;
        weatherObj.vis_miles = response.current.vis_miles;
        weatherObj.uv = response.current.uv;
        weatherObj.gust_mph = response.current.gust_mph;
    })
    .then(() => {
        response.json(weatherObj);
        console.log("Success");
    }).catch(error => {
        console.log(error);
    });
}); 


    console.log(weatherAPI.getWeather(origin));
    
    console.log("testing");

console.log(weatherAPI.getWeather("London"));
console.log(airqualityAPI.getData());


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});

