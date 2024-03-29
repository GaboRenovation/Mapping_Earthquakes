
// https://leafletjs.com/examples/quick-start/




// Add console.log to check to see if our code is working.
console.log("working");


// Add a Map Object (center of London)
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// We're assigning the variable map to the object L.map(), and we'll 
// instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center, where 
// the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
// We set the zoom level of "4" on a scale 0–18.

// Create the map object with a center and zoom level. ALTERNATE Method
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });



// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    // Code from Mapbox webpage
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });
        
        // Then we add our 'graymap' tile layer to the map.
        streets.addTo(map);

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


















