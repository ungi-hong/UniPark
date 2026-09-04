"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { Map, Marker, NavigationControl } from "react-map-gl/maplibre";

export function LocationMap({
  latitude,
  longitude,
  mapTilerKey,
}: {
  latitude: number;
  longitude: number;
  mapTilerKey: string;
}) {
  return (
    <Map
      initialViewState={{ latitude, longitude, zoom: 15.5 }}
      mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerKey}`}
      style={{ position: "absolute", inset: 0 }}
      attributionControl={false}
    >
      <NavigationControl position="top-right" showCompass={false} />
      <Marker latitude={latitude} longitude={longitude} color="#1769aa" />
    </Map>
  );
}
