const express = require('express');
const axios = require('axios');
const app = express();
const weatherAPI = require("./weatherAPI");
const airqualityAPI = require("./airqualityAPI");
const port = 5000;


app.post('/weather', (req, response) =>{
    console.log("testing")
})

console.log(weatherAPI.getWeather("London"));
console.log(airqualityAPI.getData());


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});