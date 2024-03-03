import { Map as MapLeaflet } from 'leaflet';
import { Location } from './Location';

export type MapStore = {
	map: MapLeaflet | null;
	setMap: (map: MapLeaflet | null) => void;
	userLocation: Location | undefined;
	setUserLocation: (data: Location) => void;
};
