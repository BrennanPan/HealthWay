const axios = require("axios").default;

const getData = (origin) => {
    return axios.get(`https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyDPxFvD39w1dsueXMrpviPZGK1pS6DoyXY&location.longitude=${origin.long}&location.latitude=${origin.lat}&days=1`)
    .then(res => {
        return res.data.dailyInfo[0]
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getData
}