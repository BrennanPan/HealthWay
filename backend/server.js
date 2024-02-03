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
    const origin = { lat: req.body.lat, long: req.body.long};

    console.log(weatherAPI.getWeather(origin));
    
    console.log("testing")
})

console.log(weatherAPI.getWeather("London"));
console.log(airqualityAPI.getData());


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});

