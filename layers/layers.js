var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_2 = new ol.format.GeoJSON();
var features_Colector_2 = format_Colector_2.readFeatures(json_Colector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_2.addFeatures(features_Colector_2);
var lyr_Colector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_2, 
                style: style_Colector_2,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_2_1.png" /> VERIFICADO<br />' });
var format_Camara_3 = new ol.format.GeoJSON();
var features_Camara_3 = format_Camara_3.readFeatures(json_Camara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camara_3.addFeatures(features_Camara_3);
var lyr_Camara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camara_3, 
                style: style_Camara_3,
                popuplayertitle: 'Camara',
                interactive: true,
    title: 'Camara<br />\
    <img src="styles/legend/Camara_3_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Camara_3_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Camara_3_2.png" /> GEOREFERENCIADA<br />\
    <img src="styles/legend/Camara_3_3.png" /> CON NIVEL<br />\
    <img src="styles/legend/Camara_3_4.png" /> SELLADA<br />\
    <img src="styles/legend/Camara_3_5.png" /> ALTO TRAFICO<br />\
    <img src="styles/legend/Camara_3_6.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Camara_3_7.png" /> EN MANTENCION<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_2,lyr_Camara_3,],
                                fold: 'open',
                                title: 'Levantamiento'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelite_1.setVisible(true);lyr_Colector_2.setVisible(true);lyr_Camara_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,group_Levantamiento];
lyr_Colector_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Camara_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'COTA ENTRADA 1': 'COTA ENTRADA 1', 'COTA ENTRADA 2': 'COTA ENTRADA 2', 'COTA ENTRADA 3': 'COTA ENTRADA 3', 'COTA ENTRADA 4': 'COTA ENTRADA 4', 'COTA FONDO': 'COTA FONDO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', });
lyr_Colector_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'Range', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Camara_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'COTA ENTRADA 1': 'TextEdit', 'COTA ENTRADA 2': 'TextEdit', 'COTA ENTRADA 3': 'TextEdit', 'COTA ENTRADA 4': 'TextEdit', 'COTA FONDO': 'TextEdit', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'Range', 'DIAMETRO ENTRADA 5': 'TextEdit', 'DIAMETRO SALIDA 1': 'TextEdit', 'DIAMETRO SALIDA 2': 'TextEdit', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', });
lyr_Colector_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', 'ESTADO': 'hidden field', 'DIAMETRO': 'hidden field', 'CAMARA_INICIO': 'hidden field', 'CAMARA_FINAL': 'hidden field', 'OBSERVACIONES': 'hidden field', });
lyr_Camara_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'COTA ENTRADA 1': 'hidden field', 'COTA ENTRADA 2': 'hidden field', 'COTA ENTRADA 3': 'hidden field', 'COTA ENTRADA 4': 'hidden field', 'COTA FONDO': 'hidden field', 'ESCALINES': 'hidden field', 'OBSERVACIONES': 'hidden field', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'hidden field', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'hidden field', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'hidden field', 'HALLAZGO 2': 'hidden field', });
lyr_Camara_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});