
// https://leafletjs.com/examples/quick-start/



// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    // Code from Mapbox webpage
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });
 
// 13-5-4
// We create the dark view tile layer that will be an option for our map.
    let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });

// Create a BASE LAYER that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 1,
  layers: [streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);




// 13-5-3
// To read an external .json file, we need to use the d3.json() method. 
// To use the d3.json() method, we need to have the 
// <script src="https://d3js.org/d3.v5.min.js"></script> file in the index.html page.
// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/GaboRenovation/Mapping_Earthquakes/main/majorAirports.json";

let airportData = "majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});












    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    // accessToken: API_KEY
// });




// To change the map's style, change the map id (above) using the list of Mapbox ids below:
//     mapbox/streets-v11
//     mapbox/outdoors-v11
//     mapbox/light-v10
//     mapbox/dark-v10
//     mapbox/satellite-v9
//     mapbox/satellite-streets-v11


















