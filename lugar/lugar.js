const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '80b9b231f6msh58661204ab702a9p1313b8jsnb147739e5f08' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraros datos para la dirección ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }


}
module.exports = {
    getLugarLatLng
}