const axios = require("axios").default;

const getData = () => {
    axios.get("https://api.ambeedata.com/latest/by-lat-lng?lat=32&lng=57&x-api-key=30e60701edcb93621116ec0e2f4c64fc78adcb697f73be9ded7042abbf5517ce")
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getData
}