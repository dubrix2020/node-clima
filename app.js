const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const respLugar = await lugar.getLugarLatLng(direccion);
        const respClima = await clima.getClima(respLugar.lat, respLugar.lng);

        return salida = `El clima de ${direccion} es de ${ respClima }`

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);