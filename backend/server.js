const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const weatherAPI = require("./weatherAPI");
const weatherObj = require('./weatherObj');
const airqualityAPI = require("./airqualityAPI");
const airqualityOBJ = require("./airqualityOBJ");
const port = 5000;

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

app.post('/airquality', (req, response) =>{
    const origin = { lat: req.body.Latitude, long: req.body.Longitude};

    airqualityAPI.getData(origin)
    .then(response =>{
        airqualityOBJ.CO = response.stations[0].CO;
        airqualityOBJ.NO2 = response.stations[0].NO2;
        airqualityOBJ.OZONE = response.stations[0].OZONE;
        airqualityOBJ.PM10 = response.stations[0].PM10;
        airqualityOBJ.PM25 = response.stations[0].PM25;
        airqualityOBJ.SO2 = response.stations[0].SO2;
        airqualityOBJ.AQI = response.stations[0].AQI;
    })
    .then(() => {
        response.json(airqualityOBJ);
        console.log("Success");
    }).catch(error => {
        console.log(error);
    });
}); 

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});