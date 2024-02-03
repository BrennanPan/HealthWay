const axios = require("axios");

const getAirQuality = (origin) => {
    return axios.get(`https://api.ambeedata.com/latest/by-lat-lng?lat=${origin.lat}&lng=${origin.long}&x-api-key=d4d73a0efabe0df98e6fc675ed96025918764f34b3534517dc028d5c264b6c94`)
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