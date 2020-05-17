const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4ec7ca413a326684823a0eb67cd90f49&units=metric`)

    return resp.data.main.temp;
}
module.exports = {
    getClima
}