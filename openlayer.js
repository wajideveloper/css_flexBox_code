var mapView = new ol.View({
    center: ol.proj.fromLonLat([70, 30]),
    zoom: 5,
})

var map = new ol.Map ({
    target: 'map',
    view: mapView,
});

var osmTile = new ol.layer.Tile ({
    title : 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);

var PakistanDistrictTile = new ol.layer.Tile({
    title: "Pakistan Districts",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/mapshop/wms',
        params: {'LAYERS': 'mapshop:PakProvinces', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(PakistanDistrictTile);