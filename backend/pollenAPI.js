const axios = require("axios").default;

const getData = (origin) => {
    return axios.get(`https://api.ambeedata.com/forecast/pollen/by-lat-lng?lat=${origin.lat}&lng=${origin.long}&x-api-key=ab72567de96ae8fcfd246652c0e0ef09f2f11e663ce7948b203985c60d5f08ca`)
    .then(res => {
        //Risk/Count
        return res.data.data[0]
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getData
}