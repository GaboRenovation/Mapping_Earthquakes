
// https://leafletjs.com/examples/quick-start/




// Add console.log to check to see if our code is working.
// console.log("working");


// Add a Map Object (center of London)
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([37.6213, -100.3790], 5);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([44, -80.0], 3);



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


// https://leafletjs.com/examples/quick-start/
// Adding a marker to our simple map requires only one line of code, 
// found in the Leaflet Quick Start Guide (Links to an external site.), 
// under the "Markers, circles and polygons" subheading.  
//  Add a marker to the map for Los Angeles, California.
// the following line of code before our tileLayer()code,
//    let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // to have a circle marker (works only for 1 city) we changed as follows:
//     let marker = L.circleMarker([34.0522, -118.2437], {
//         radius: 50
//      }).addTo(map);

    //  https://leafletjs.com/reference-1.6.0.html#circlemarker
    //  https://leafletjs.com/reference-1.6.0.html#circle
    //  https://leafletjs.com/reference-1.6.0.html#marker

// The following code works for multiple points or cities
// 13-4-2
// an array of cities is required
// An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   },
//   {
//     location: [25.671240, -100.309484],
//     city: "Monterrey",
//     state: "NL",
//     population: 1109000
//   },
//   {
//     location: [19.43257, -99.13346],
//     city: "Mexico",
//     state: "MX",
//     population: 8855000
//   }
//   ];
// When handling large datasets, it's a best practice to have the data in an 
// external file and refer to that file and dataset in the logic.js file.

// Get data from cities.js
//let cityData = cities;

// 13-4-2
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {radius: city.population/200000})
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


//     L.circleMarker(city.location, {radius: 30}).addTo(map);


//  in the body of the index.html file and before the path to the logic.js script, add a <script> file with the path to the JavaScript cities.js file, like this:
// <script type="text/javascript" src="static/js/cities.js"></script>

// Loop through the cities array and create one marker for each 
// city. when the data is in this conde
// // if data is outside we need to reference it  13-4-2
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
//    });


// CIRCLE MARKER for the array when the data is in this code
// if data is outside we need to reference it  13-4-2
//    cities.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {radius: 30}).addTo(map);
//    });


// 13-4-3
// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);


///////////////////////////////////////////////////////////////////////////
// 13.5.2  GeoJSON
// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// // // Grabbing our GeoJSON data.
// // // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
// //     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng);
//     }
//   }).addTo(map);
///////////////////////////////////////////////////////////////////////////
  


// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    // Code from Mapbox webpage
//    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //         maxZoom: 18,
    //         accessToken: API_KEY
    //     });
    
    // // Then we add our 'graymap' tile layer to the map.
        // streets.addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    // Code from Mapbox webpage
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

let sateliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

// Create a BASE LAYER that holds both maps.
let baseMaps = {
"Streets": streets,
"Dark": dark,
"Satelite Streets": sateliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 3,
    layers: [streets]
  })


    // 1. Add a 2nd layer group for the tectonic plate data.
        let allEarthquakes = new L.LayerGroup();
    
    // Delivery 1
        let tectonic = new L.LayerGroup();

    // Add a 3rd layer group for the major earthquake data.
        let majorEQ = new L.LayerGroup();

    // 2. Add a reference to the tectonic plates group to the overlays object.
        let overlays = {
        "Earthquakes": allEarthquakes,
        "Tectonic Plates": tectonic,
    // 2. Add a reference to the major earthquake group to the overlays object.
        "Major Earthqakes":majorEQ
    };

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);


// 13-5-3
// To read an external .json file, we need to use the d3.json() method. 
// To use the d3.json() method, we need to have the 
// <script src="https://d3js.org/d3.v5.min.js"></script> file in the index.html page.
// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/    <GitHub_name>   /Mapping_Earthquakes/main/majorAirports.json";

// let airportDat = "majorAirports.json";
// let torontoData = "torontoRoutes.json";
// let torontoNeighborhoods = "torontoNeighborhoods.json";

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/    <GitHub_name>   /Mapping_Earthquakes/main/torontoRoutes.json";
// Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/   <GitHub_name>   /Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
// d3.json(torontoNeighborhoods).then(function(data) {
//     console.log(data);

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     color: "#ffffa1", 
//     weight: 1,
//     onEachFeature: function(feature, layer) {
//         layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//     }
// })
// .addTo(map);
// });


// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.

    function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#FF0000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
}


// This function determines the color of the marker based on the magnitude of the earthquake.

function getColor(magnitude) {
    if (magnitude > 6) {
    // return "#ea2c2c";
    return "#FF0000";
    }
    
    if (magnitude > 4) {
    return "#FF7F50";
    }
    
    if (magnitude > 3) {
    return "#FFA500";
    }
    
    if (magnitude > 2) {
    return "#FFD700";
    }
    
    if (magnitude > 1) {
    return "#FFFF00";
    }
    
    return "#ADFF2F";
    }
    
    
// Bubble graph 
    function getRadius(magnitude) {
        if (magnitude === 0) {
    return 1;
    }
    
    return magnitude * 4;
    }
    //////////////////////////////////////////////////////////////////
    
    
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
    
    // circle marker
    pointToLayer: function(feature, latlng) {
        console.log(data);
    return L.circleMarker(latlng);
    },
    
    style: styleInfo,
    onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
    }).addTo(allEarthquakes);
    
allEarthquakes.addTo(map);
    
    

// Delivery 2 //

// 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
    d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson").then(function(data) {

// 4. Use the same style as the earthquake data.
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.properties.mag),
    
        color: "#006400",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
}
    
// 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
function getColor(magnitude) {
    if (magnitude > 6) {
    return "#FF0000";
    }
    
    if (magnitude > 5) {
    return "#CD5C5C";
    }
    
    return "#FA8072";
    }
    
// 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
    
    function getRadius(magnitude) {
    if (magnitude === 0) {
    return 1;
    }
    
    return magnitude * 4;
    }
    
// 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
// sets the style of the circle, and displays the magnitude and location of the earthquake
// after the marker has been created and styled.
L.geoJson(data, {
    
    pointToLayer: function(feature, latlng) {
    console.log(data);
    return L.circleMarker(latlng);
    },
    
    style: styleInfo,
    
    onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
    
// 8. Add the major earthquakes layer to the map.
}).addTo(majorEQ);
    
// 9. Close the braces and parentheses for the major earthquake data.
    majorEQ.addTo(map);
});
    
    
// Legend.
    
let legend = L.control({
    position: "bottomright"
    });
    
    legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    const magnitudes = [0, 1, 2, 3, 4, 5];
    const colors = [
    "#ADFF2F",
    "#FFFF00",
    "#FFD700",
    "#FFA500",
    "#FF7F50",
    "#FF0000"
    ];
    
    
    
// Looping to generate labels by threshold.
    
    for (var i = 0; i < magnitudes.length; i++) {
        console.log(colors[i]);
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
    }
    return div;
    };
    
legend.addTo(map);

// Create a style for the lines.
    
    let myStyle = {
        color: "grey",
        fill:false,
        weight: 1
    }
    
    
    
// Use d3.json to make a call to get our Tectonic Plate geoJSON data.
d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json").then(function(data) {
    L.geoJson(data, {
    style: myStyle,
    }).addTo(tectonic);
    
    tectonic.addTo(map);
    });
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

