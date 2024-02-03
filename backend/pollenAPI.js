const axios = require("axios").default;

const getData = (origin) => {
    return axios.get(`https://api.ambeedata.com/forecast/pollen/by-lat-lng?lat=${origin.lat}&lng=${origin.long}&x-api-key=aa59f084ddd391685f4a2de1bac6f07108b80de9e0c78999a1702d620e496edb`)
    .then(res => {
        return res.data.data[0]
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getData
}