import { Map, marker, popup } from 'leaflet';
import { tileLayerSelect } from '../../config/tile-layer/functions';
import { startMapTemplate } from '../../assets/template/content';
import { tileLayers } from '../../config/tile-layer/data';

startMapTemplate(document, '');

const map = new Map('map').setView([-26.9866, -66.7381], 13);

tileLayerSelect(tileLayers.baseLayers.default.map, {
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(map);

marker( [-26.988259032403032, -66.73797058911501]).addTo(map);
