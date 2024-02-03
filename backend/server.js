const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');
const app = express();
const weatherAPI = require("./weatherAPI");
const airqualityAPI = require("./airqualityAPI");
const port = 5000;

app.use(bodyparser.urlencoded({ urlencoded: true }));
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