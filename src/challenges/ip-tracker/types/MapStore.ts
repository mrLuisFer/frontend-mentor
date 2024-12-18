import { Map as MapLeaflet } from "leaflet";
import type { Location } from "./Location.js";

export type MapStore = {
	map: MapLeaflet | null;
	// eslint-disable-next-line no-unused-vars
	setMap: (map: MapLeaflet | null) => void;
	userLocation: Location | undefined;
	// eslint-disable-next-line no-unused-vars
	setUserLocation: (data: Location) => void;
};
