ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8169800.581339, -4507595.507113, -8160858.929197, -4502651.417922]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PEAS_1 = new ol.format.GeoJSON();
var features_PEAS_1 = format_PEAS_1.readFeatures(json_PEAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAS_1.addFeatures(features_PEAS_1);
var lyr_PEAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEAS_1, 
                style: style_PEAS_1,
                popuplayertitle: 'PEAS',
                interactive: true,
                title: '<img src="styles/legend/PEAS_1.png" /> PEAS'
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
var group_Topografa = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Topografía'});
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_2,lyr_Camaralev_3,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Referencial'});

lyr_GoogleSatelite_0.setVisible(true);lyr_PEAS_1.setVisible(true);lyr_Colector_2.setVisible(true);lyr_Camaralev_3.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_PEAS_1,group_Levantamiento];
lyr_PEAS_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDENTIFICADORELEMENTO': 'IDENTIFICADORELEMENTO', 'SUBTYPE': 'SUBTYPE', 'NOMBRE': 'NOMBRE', 'MEDIDORCAUDAL': 'MEDIDORCAUDAL', 'CONFIGURACION': 'CONFIGURACION', 'GOLPE_ARIETE': 'GOLPE_ARIETE', 'SUBESTACION': 'SUBESTACION', 'VENTILACION': 'VENTILACION', 'IZAMIENTO': 'IZAMIENTO', 'SISTEMA_REBALSE': 'SISTEMA_REBALSE', 'ESTADO': 'ESTADO', 'OBSERVACION': 'OBSERVACION', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_Colector_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Camaralev_3.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'TERRENO INACCESIBLE': 'TERRENO INACCESIBLE', 'RECINTO PARTICULAR O VIVIENDA': 'RECINTO PARTICULAR O VIVIENDA', 'CAMARA NUEVA': 'CAMARA NUEVA', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'E (m) RTK': 'E (m) RTK', 'N (m) RTK': 'N (m) RTK', 'ELEV (m) RTK': 'ELEV (m) RTK', 'PROFUNDIDAD (m) RTK': 'PROFUNDIDAD (m) RTK', 'COTA ANILLO (m) RTK': 'COTA ANILLO (m) RTK', 'COTA FONDO (m) RTK': 'COTA FONDO (m) RTK', });
lyr_PEAS_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'IDENTIFICADORELEMENTO': '', 'SUBTYPE': '', 'NOMBRE': '', 'MEDIDORCAUDAL': '', 'CONFIGURACION': '', 'GOLPE_ARIETE': '', 'SUBESTACION': '', 'VENTILACION': '', 'IZAMIENTO': '', 'SISTEMA_REBALSE': '', 'ESTADO': '', 'OBSERVACION': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', });
lyr_Colector_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'Range', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Camaralev_3.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'Range', 'DIAMETRO ENTRADA 5': 'TextEdit', 'DIAMETRO SALIDA 1': 'TextEdit', 'DIAMETRO SALIDA 2': 'TextEdit', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'TERRENO INACCESIBLE': 'CheckBox', 'RECINTO PARTICULAR O VIVIENDA': 'CheckBox', 'CAMARA NUEVA': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'TextEdit', 'ESTADO BANQUETA': 'TextEdit', 'NAPA': 'TextEdit', 'EMBANCAMIENTO': 'TextEdit', 'ESTADO ESCALINES': 'TextEdit', 'E (m) RTK': 'TextEdit', 'N (m) RTK': 'TextEdit', 'ELEV (m) RTK': 'TextEdit', 'PROFUNDIDAD (m) RTK': 'TextEdit', 'COTA ANILLO (m) RTK': 'TextEdit', 'COTA FONDO (m) RTK': 'TextEdit', });
lyr_PEAS_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDENTIFICADORELEMENTO': 'no label', 'SUBTYPE': 'no label', 'NOMBRE': 'no label', 'MEDIDORCAUDAL': 'no label', 'CONFIGURACION': 'no label', 'GOLPE_ARIETE': 'no label', 'SUBESTACION': 'no label', 'VENTILACION': 'no label', 'IZAMIENTO': 'no label', 'SISTEMA_REBALSE': 'no label', 'ESTADO': 'no label', 'OBSERVACION': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_Colector_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ESTADO': 'hidden field', 'DIAMETRO': 'hidden field', 'CAMARA_INICIO': 'hidden field', 'CAMARA_FINAL': 'hidden field', 'OBSERVACIONES': 'hidden field', });
lyr_Camaralev_3.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'hidden field', 'OBSERVACIONES': 'hidden field', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'hidden field', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'hidden field', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'hidden field', 'HALLAZGO 2': 'hidden field', 'COMUNA': 'no label', 'PROFUNDIDAD ENTRADA 1': 'no label', 'PROFUNDIDAD ENTRADA 2': 'no label', 'PROFUNDIDAD ENTRADA 3': 'no label', 'PROFUNDIDAD ENTRADA 4': 'no label', 'PROFUNDIDAD FONDO': 'no label', 'FALLA ESTRUCTURAL': 'no label', 'TERRENO INACCESIBLE': 'no label', 'RECINTO PARTICULAR O VIVIENDA': 'no label', 'CAMARA NUEVA': 'no label', 'REQUIERE LIMPIEZA': 'no label', 'DUDA?': 'no label', 'ESTADO CANAL': 'no label', 'ESTADO BANQUETA': 'no label', 'NAPA': 'no label', 'EMBANCAMIENTO': 'no label', 'ESTADO ESCALINES': 'no label', 'E (m) RTK': 'no label', 'N (m) RTK': 'no label', 'ELEV (m) RTK': 'no label', 'PROFUNDIDAD (m) RTK': 'no label', 'COTA ANILLO (m) RTK': 'no label', 'COTA FONDO (m) RTK': 'no label', });
lyr_Camaralev_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});