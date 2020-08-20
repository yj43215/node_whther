const request = require('request')
// let url = "http://api.openweathermap.org/data/2.5/weather?q=surat&appid=6a298d5cbbc5297336ef877b20733d86";
// request({ 'url': url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Error")
//     }
//     else if (response.body.cod != "200") {
//         console.log(response.body.cod)
//     }
//     else {
//         console.log("no error found")
//         console.log(response.body)
//     }
// })


const geocode = (city,callback) =>{
    let geourl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(city)+".json?access_token=pk.eyJ1IjoieWFzaGphaW4iLCJhIjoiY2tkenBlMHFzMm52OTJ6bnlrbnAwaW9zOCJ9.r5xegx-S9ugzr8bsdGOcgw&limit=2"


    request({ 'url': geourl, json: true }, (error, response) => {
        if (error) {
           callback("Error")
        }
        else if (response.body.features.length == 0) {
            callback("No data Found")
        }
        else {
            callback(response.body.features[1].text + " : " + response.body.features[1].center)
        }
    })
    

}

geocode('surat',(msg)=>{
    console.log(msg)
})
