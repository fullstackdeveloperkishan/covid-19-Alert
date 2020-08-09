// window.addEventListener("load", async function () {
//     this.counter();

//     mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q';
//     map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/dark-v10',
//         zoom: 3.2,
//         center: [80, 23]
//     });

//     mapArrayData = []

//     await this.updateMap();
    
    
// }, true);


// function counter() {
//     $('.countup').counterUp({
//         delay: 9,
//         time: 1000
//     });
// }

// function loadMap() {
//     this.map.on('load', async function () {
//             this.mapArrayData
//                 map.addSource('places', {
//                     'type': 'geojson',
//                     'data': {
//                         'type': 'FeatureCollection',
//                         'features': [
//                             {
//                                 'type': 'Feature',
//                                 'properties': {
//                                     'description':
//                                         '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
//                                 },
//                                 'geometry': {
//                                     'type': 'Point',
//                                     'coordinates': [-77.038659, 38.931567]
//                                 }
//                             }
//                         ]
//                     }
//                 });

//                 // Add a layer showing the places.
//                 map.addLayer({
//                     'id': 'places',
//                     'type': 'symbol',
//                     'source': 'places',
//                     'layout': {
//                         'icon-image': 'custom-marker',
//                         'icon-allow-overlap': true
//                     }
//                 });

//         // Create a popup, but don't add it to the map yet.
//         popup = new mapboxgl.Popup({
//             closeButton: false,
//             closeOnClick: false
//         });

//         map.on('mouseenter', 'places', function (e) {
//             // Change the cursor style as a UI indicator.
//             map.getCanvas().style.cursor = 'pointer';

//             var coordinates = e.features[0].geometry.coordinates.slice();
//             var description = e.features[0].properties.description;

//             // Ensure that if the map is zoomed out such that multiple
//             // copies of the feature are visible, the popup appears
//             // over the copy being pointed to.
//             while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//                 coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//             }

//             // Populate the popup and set its coordinates
//             // based on the feature found.
//             popup
//                 .setLngLat(coordinates)
//                 .setHTML(description)
//                 .addTo(map);
//         });

//         map.on('mouseleave', 'places', function () {
//             map.getCanvas().style.cursor = '';
//             popup.remove();
//         });

//     });
// }





// async function updateMap() {
//     // console.log("Updating map with realtime data"
//     $.ajax({
//         url: "https://disease.sh/v3/covid-19/countries", success: async function (data) {
//             var finalHoverdata = [];
//             for (var i = 0; i < data.length; i++) {
//                 var latitude = data[i].countryInfo.lat
//                 var longitude = data[i].countryInfo.long
//                 var mapDeaths = data[i].deaths
//                 var mapCountry = data[i].country
//                 var mapRecovered = data[i].recovered
//                 var mapActive = data[i].active
//                 var mapTests = data[i].tests
//                 var cases = data[i].cases
//                 var mapContinents = data[i].continents

//                 var hoverData = {
//                     latitude: latitude,
//                     longitude: longitude,
//                     mapDeaths: mapDeaths,
//                     mapCountry: mapCountry,
//                     mapRecovered: mapRecovered,
//                     mapActive: mapActive,
//                     mapTests: mapTests,
//                     mapCases: cases,
//                     mapContinents: mapContinents
//                 }

//                 finalHoverdata.push(hoverData)

//                 if (cases > 50,00,000) {
//                     color = "rgb(20,0,0)"
//                 } else if (cases > 10,00,000 && cases <= 50,00,000) {
//                     color = "rgb(40,0,0)"
//                 } else if (cases > 1,00,000 && cases <= 10,00,000) {
//                     color = "rgb(100,0,0)"
//                 } else if (cases > 50,000 && cases <= 1,00,000) {
//                     color = "rgb(179,0,0)"
//                 } else if (cases > 5000 && cases <= 50,000) {
//                     color = "rgb(218,0,0)"
//                 } else  (cases > 1000 && cases <= 5000) {
//                     color = "rgb(0,179,0)"
//                 }

//                 new mapboxgl.Marker({
//                     draggable: false,
//                     color: color,

//                 }).setLngLat([longitude, latitude]).addTo(map);
//             }
//             // console.log(finalHoverdata);
//             this.mapArrayData = finalHoverdata;

//             console.log(this.mapArrayData, "Map array");
//             await loadMap();

//         }
//     });

// }



window.addEventListener("load", async function () {
    this.counter();

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q';
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 3.2,
        center: [80, 23]
    });

    mapArrayData = []

    await this.updateMap();
    
    
}, true);


function counter() {
    $('.countup').counterUp({
        delay: 9,
        time: 1000
    });
}

function loadMap() {
    this.map.on('load', async function () {
            this.mapArrayData
                map.addSource('places', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-77.038659, 38.931567]
                                }
                            }
                        ]
                    }
                });

                // Add a layer showing the places.
                map.addLayer({
                    'id': 'places',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': 'custom-marker',
                        'icon-allow-overlap': true
                    }
                });

        // Create a popup, but don't add it to the map yet.
        popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', function (e) {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

        map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

    });
}





async function updateMap() {
    // console.log("Updating map with realtime data"
    $.ajax({
        url: "https://disease.sh/v3/covid-19/countries", success: async function (data) {
            // var finalHoverdata = [];
            for (var i = 0; i < data.length; i++) {
                var latitude = data[i].countryInfo.lat
                var longitude = data[i].countryInfo.long
                var mapDeaths = data[i].deaths
                var mapCountry = data[i].country
                var mapRecovered = data[i].recovered
                var mapActive = data[i].active
                var mapTests = data[i].tests
                var cases = data[i].cases
                var mapContinents = data[i].continents
                var country = data[i].country

                if (cases > 5000000) {
                    color = "rgb(20,0,0)"
                } else if (cases > 1000000 && cases <= 5000000) {
                    color = "rgb(40,0,0)"
                } else if (cases > 100000 && cases <= 1000000) {
                    color = "rgb(100,0,0)"
                } else if (cases > 50000 && cases <= 100000) {
                    color = "rgb(179,0,0)"
                } else if (cases > 5000 && cases <= 50000) {
                    color = "rgb(218,0,0)"
                } else if (cases > 1000 && cases <= 5000) {
                    color = "rgb(255,191,0)"
                } else {
                    color = "rgb(0,179,0)"
                }

                var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    country + ": Active Count: " + mapActive
                );

                // create DOM element for the marker
                var el = document.createElement('div');
                el.id = 'map';

                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color,

                }).setLngLat([longitude, latitude]).setPopup(popup).addTo(map);

                const markerDiv = marker.getElement();

                markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
            }

        }
    });
}