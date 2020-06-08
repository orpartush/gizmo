export const mapService = {
    getLocByName
}

import axios from 'axios';

async function getLocByName(locName) {
    const API_KEY = 'AIzaSyCa_A7Pfp8VgZoZsDddRtPEL-tW_MFT7iY'
    let location = {}
    try {

        let res = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locName}&key=${API_KEY}`)

        location.address = res.data.results[0].formatted_address
        var geo = res.data.results[0].geometry.location
        location.lat = geo.lat
        location.lng = geo.lng
        return location

    } catch (err) {
        console.log(err)
    }
}
