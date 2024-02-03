const axios = require("axios").default;

const getData = (origin) => {
    return axios.get(`https://api.ambeedata.com/forecast/pollen/by-lat-lng?lat=${origin.lat}&lng=${origin.long}&x-api-key=c15d9a0e62a375d724aa69436414c69d028fcdacbf77218716edc1cc7d38fd9b`)
    .then(res => {
        return res.data.data[0]
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getData
}