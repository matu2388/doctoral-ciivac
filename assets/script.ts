import { Map, marker, popup } from 'leaflet';
import { tileLayerSelect } from '../../config/tile-layer/functions';
import { startMapTemplate } from '../../assets/template/content';
import { tileLayers } from '../../config/tile-layer/data';

startMapTemplate(document, 'Sección 2 - Pop-up con Marcadores y sin Marcadores');

const mymap = new Map('map').setView([-26.9866, -66.7381], 13);

tileLayerSelect(tileLayers.baseLayers.default.map, {
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(mymap);

marker( [-26.988259032403032, -66.73797058911501]).addTo(mymap);
