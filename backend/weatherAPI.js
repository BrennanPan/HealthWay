const axios = require('axios');

const getWeather = (origin) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=65002d70873d4054aff02044240302&q=${origin.lat},${origin.long}`
    axios.get(url,{
            header:{
                'Content-Type': 'application/json'
            }, data: {
                "locations": [
                    {
                        "q": "53, -0.12",
                        "custom_id" : "my-id-1"
                    },
                    {
                        "q": "London",
                        "custom_id": "any-internal-id"
                    },
                    {
                        "q": "90201",
                        "custom_id": "us-zipcode-id-765"
                    }
                ]
            }})
    .then(response => {
        console.log(response.data)
    }).catch(err =>{
        console.log(err)
    })
}



module.exports = {
    getWeather
}