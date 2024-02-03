const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');
const app = express();
const weatherAPI = require("./weatherAPI");
const airqualityAPI = require("./airqualityAPI");
const pollenAPI = require("./pollenAPI");
const port = 4500;

app.use(bodyparser.urlencoded({ urlencoded: true }));
app.use(bodyparser.json());

app.post('/weather', (req, response) =>{
    const origin = { lat: req.body.lat, long: req.body.long};

    console.log(weatherAPI.getWeather(origin));
    
    console.log("testing")
})

app.post('/airquality', (req, response) =>{
    const origin = { lat: req.body.lat, long: req.body.long };

    airqualityAPI.getData(origin)
    .then(response =>{
        airqualityOBJ.CO = res.data.stations[0].CO;
        airqualityOBJ.NO2 = res.data.stations[0].NO2;
        airqualityOBJ.OZONE = res.data.stations[0].OZONE;
        airqualityOBJ.PM10 = res.data.stations[0].PM10;
        airqualityOBJ.PM25 = res.data.stations[0].PM25;
        airqualityOBJ.SO2 = res.data.stations[0].SO2;
        airqualityOBJ.AQI = res.data.stations[0].AQI;
    })
    .then(() => {
        response.json(airqualityOBJ);
        console.log("Success");
    })

    console.log(airqualityAPI.getData(origin));
})

console.log(weatherAPI.getWeather("London"));
console.log(airqualityAPI.getData());
console.log(pollenAPI.getData());

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});