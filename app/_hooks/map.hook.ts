'use client';
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export const useMap = () =>
{
	const mapRef = useRef<HTMLDivElement>(null);
useEffect(() => {
		const initMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
				version: "weekly",
			});
			const { Map } = await loader.importLibrary("maps");
			const { AdvancedMarkerElement } = (await loader.importLibrary(
				"marker"
			)) as google.maps.MarkerLibrary;
			const position = {
				lat: 33.2890248,
				lng: 44.3859185,
			};
			const mapOptions: google.maps.MapElementOptions = {
				center: position,
				zoom: 17,
				mapId: "MAP_ID_NEXT",
			};
			const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
			const marker = new AdvancedMarkerElement({
				map,
				position,
			});
		};
		initMap();
} );
	return {mapRef}
}