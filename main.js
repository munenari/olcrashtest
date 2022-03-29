import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';

// conf
const layerNum = 5 // layer numbers can be increase
const opacity = 0.1 // 1 will not be crashed

// main
const layers = []
const loadFunction = function ( tile, url ) {
	tile.setFeatures( [] )
	// do nothing
}
layers.push( new TileLayer( { source: new OSMSource() } ) )
for ( let i = 0; i < layerNum; i++ ) {
	layers.push( new VectorTileLayer( {
		opacity: opacity,
		source: new VectorTileSource( {
			url: `dummy.pbf?z={z}&x={x}&y={y}&layer=${ i }`,
			tileLoadFunction: loadFunction
		} )
	} ) )
}
const map = new Map( {
	layers: layers,
	target: 'map',
	view: new View( {
		center: [ 0, 0 ],
		zoom: 2
	} )
} )
