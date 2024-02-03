const axios = require("axios");

const getAirQuality = (origin) => {
    return axios.get(`https://api.ambeedata.com/latest/by-lat-lng?lat=${origin.lat}&lng=${origin.long}&x-api-key=8cde8bac7d9b101e1f23a68a55149950f0bc9f8ed5965f2a92504f0b4936ca39`)
    .then(res => {
        console.log(res.data)
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getAirQuality
}