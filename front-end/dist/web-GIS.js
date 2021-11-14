//Full screen map view
var mapId = document.getElementById('map');
function fullScreenView() {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        mapId.requestFullscreen();
    }
}

//Print Map
//$('.print-map').click(function(){
   // window.print();
//});

//leaflet browser print function
L.control.browserPrint({ position:'topright'}).addTo(map);


//Leaflet Search Location
L.Control.geocoder().addTo(map);

//Leaflet Measure
L.control.measure({
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map);


//zom to layer 
$('.zoom-to-layer').click(function(){
    map.setView([8.5025, 81.1804], 14)
   });

   