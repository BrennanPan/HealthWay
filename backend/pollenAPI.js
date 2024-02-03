const axios = require("axios").default;

const getData = (origin) => {
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