const axios = require('axios');

const getWeather = (origin) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=65002d70873d4054aff02044240302&q=${origin.lat},${origin.long}`
    axios.get(url)
    .then(response => {
        return response.data
    }).catch(err =>{
        console.log(err)
    })
}



module.exports = {
    getWeather
}