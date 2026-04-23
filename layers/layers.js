ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8168982.357916, -4508024.949668, -8158776.814256, -4502341.834856]);
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
            'type':'base',
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
    <img src="styles/legend/Colector_2_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_2_2.png" /> SEMI VERIFICADO<br />' });
var format_Camaralev_3 = new ol.format.GeoJSON();
var features_Camaralev_3 = format_Camaralev_3.readFeatures(json_Camaralev_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camaralev_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camaralev_3.addFeatures(features_Camaralev_3);
var lyr_Camaralev_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camaralev_3, 
                style: style_Camaralev_3,
                popuplayertitle: 'Camara lev',
                interactive: true,
    title: 'Camara lev<br />\
    <img src="styles/legend/Camaralev_3_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Camaralev_3_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Camaralev_3_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Camaralev_3_3.png" /> SELLADA<br />\
    <img src="styles/legend/Camaralev_3_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Camaralev_3_5.png" /> SIN ACCESO<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_2,lyr_Camaralev_3,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Referencial'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Colector_2.setVisible(true);lyr_Camaralev_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,group_Levantamiento];
lyr_Colector_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Camaralev_3.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'TERRENO INACCESIBLE': 'TERRENO INACCESIBLE', 'RECINTO PARTICULAR O VIVIENDA': 'RECINTO PARTICULAR O VIVIENDA', 'CAMARA NUEVA': 'CAMARA NUEVA', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'E (m) RTK': 'E (m) RTK', 'N (m) RTK': 'N (m) RTK', 'ELEV (m) RTK': 'ELEV (m) RTK', 'PROFUNDIDAD (m) RTK': 'PROFUNDIDAD (m) RTK', 'COTA ANILLO (m) RTK': 'COTA ANILLO (m) RTK', 'COTA FONDO (m) RTK': 'COTA FONDO (m) RTK', 'E (m) SIRGAS 2025': 'E (m) SIRGAS 2025', 'N (m) SIRGAS 2025': 'N (m) SIRGAS 2025', 'COTA ANILLO (m) SIRGAS 2025': 'COTA ANILLO (m) SIRGAS 2025', 'COTA FONDO (m) SIRGAS 2025': 'COTA FONDO (m) SIRGAS 2025', });
lyr_Colector_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'Range', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Camaralev_3.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'Range', 'DIAMETRO ENTRADA 5': 'TextEdit', 'DIAMETRO SALIDA 1': 'TextEdit', 'DIAMETRO SALIDA 2': 'TextEdit', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'TERRENO INACCESIBLE': 'CheckBox', 'RECINTO PARTICULAR O VIVIENDA': 'CheckBox', 'CAMARA NUEVA': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'TextEdit', 'ESTADO BANQUETA': 'TextEdit', 'NAPA': 'TextEdit', 'EMBANCAMIENTO': 'TextEdit', 'ESTADO ESCALINES': 'TextEdit', 'E (m) RTK': 'TextEdit', 'N (m) RTK': 'TextEdit', 'ELEV (m) RTK': 'TextEdit', 'PROFUNDIDAD (m) RTK': 'TextEdit', 'COTA ANILLO (m) RTK': 'TextEdit', 'COTA FONDO (m) RTK': 'TextEdit', 'E (m) SIRGAS 2025': 'TextEdit', 'N (m) SIRGAS 2025': 'TextEdit', 'COTA ANILLO (m) SIRGAS 2025': 'TextEdit', 'COTA FONDO (m) SIRGAS 2025': 'TextEdit', });
lyr_Colector_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ESTADO': 'hidden field', 'DIAMETRO': 'hidden field', 'CAMARA_INICIO': 'hidden field', 'CAMARA_FINAL': 'hidden field', 'OBSERVACIONES': 'hidden field', });
lyr_Camaralev_3.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'hidden field', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'inline label - visible with data', 'HALLAZGO 2': 'inline label - visible with data', 'COMUNA': 'inline label - always visible', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD FONDO': 'hidden field', 'FALLA ESTRUCTURAL': 'hidden field', 'TERRENO INACCESIBLE': 'hidden field', 'RECINTO PARTICULAR O VIVIENDA': 'hidden field', 'CAMARA NUEVA': 'hidden field', 'REQUIERE LIMPIEZA': 'hidden field', 'DUDA?': 'hidden field', 'ESTADO CANAL': 'inline label - always visible', 'ESTADO BANQUETA': 'inline label - always visible', 'NAPA': 'inline label - always visible', 'EMBANCAMIENTO': 'inline label - always visible', 'ESTADO ESCALINES': 'inline label - always visible', 'E (m) RTK': 'hidden field', 'N (m) RTK': 'hidden field', 'ELEV (m) RTK': 'hidden field', 'PROFUNDIDAD (m) RTK': 'inline label - visible with data', 'COTA ANILLO (m) RTK': 'hidden field', 'COTA FONDO (m) RTK': 'hidden field', 'E (m) SIRGAS 2025': 'inline label - visible with data', 'N (m) SIRGAS 2025': 'inline label - visible with data', 'COTA ANILLO (m) SIRGAS 2025': 'inline label - always visible', 'COTA FONDO (m) SIRGAS 2025': 'inline label - visible with data', });
lyr_Camaralev_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});