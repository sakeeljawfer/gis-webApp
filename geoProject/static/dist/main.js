
    // map class initialize 
    var map = L.map('map').setView([8.5025, 81.1804], 14);
    map.zoomControl.setPosition('topright');

  // adding osm tilelayer 
   var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

var st = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

//var usgs = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
	//maxZoom: 80,
	//attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
//});




//Adding marker in the center of map
   var singleMarker = L.marker([8.5025, 81.1804]).addTo(map)
    .bindPopup('Location')
   .openPopup();

    //add map scale
L.control.scale().addTo(map);



//Map coordinate display
map.on('mousemove', function (e) {
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})



//Geojson load (MarkerCluster)
 var marker = L.markerClusterGroup();
 var city = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name)
     }
 }
 );
 city.addTo(marker);
 //marker.addTo(map);

 

 //leaflet layer control
 var baseMaps = {
     'OSM': osm,
     'Water Colour Map': watercolor,
     'Stamen_Toner': st,
     //'USGS_Satellite' : usgs
 }
var overLayerMaps = {
    'GeoJSON Marker': marker,
    'Single Marker' : singleMarker
}

L.control.layers(baseMaps, overLayerMaps ,{collapsed: false, position:'topleft' }).addTo(map);



