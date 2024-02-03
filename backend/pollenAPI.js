const axios = require("axios").default;
// https://api.ambeedata.com/forecast/pollen/by-lat-lng?lat=${origin.lat}&lng=${origin.long}&x-api-key=ee3290144b1bdad2766e9d3c632f07af13e16088475ad6a026d430704059d9d1
//const getData = (origin) => {
// res.data.data
    
const getData = () => {
    //axios.get(`https://api.ambeedata.com/forecast/pollen/by-lat-lng?lat=27&lng=81&x-api-key=8cde8bac7d9b101e1f23a68a55149950f0bc9f8ed5965f2a92504f0b4936ca39`)
    axios.get(`https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyDPxFvD39w1dsueXMrpviPZGK1pS6DoyXY&location.longitude=35.32&location.latitude=32.32&days=1`)
    .then(res => {
        console.log(res.data.dailyInfo[0])
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getData
}