import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapTiler } from "../mapTiler.js";
import { useMapStore } from "../lib/store/useMapStore.js";
import { LatLngExpression } from "leaflet";
import { useMemo } from "react";

export default function Map() {
	const { setMap, userLocation } = useMapStore();
	const zoomLevel = 6;

	const center: LatLngExpression = useMemo(() => {
		return {
			lat: userLocation?.location.lat ?? 0,
			lng: userLocation?.location.lng ?? 0,
		};
	}, [userLocation?.location.lat, userLocation?.location.lng]);
	return (
		<MapContainer center={center} zoom={zoomLevel} ref={setMap} className="h-[600px]">
			<TileLayer url={mapTiler.url} attribution={mapTiler.attribution} />
		</MapContainer>
	);
}
