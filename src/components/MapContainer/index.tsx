import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import style from "./style.module.css";
import { useAppSelector } from "../../store/hooks";

export default function MapContainer() {
  const { lat, lon } = useAppSelector((state) => state.data.coords);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const myAPIKey = "0895cbb5ad8c463ca78d2062e74f3423";
  const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    // @ts-ignore
    map.current = new maplibregl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [lon, lat],
      zoom: 0,
    });
  });

  useEffect(() => {
    if (map.current === null) return;
    if (lon === 0 && lat === 0) return;

    const marker = new maplibregl.Marker({ color: "#FF0000" });
    marker.setLngLat([lon, lat]).addTo(map.current);
    // @ts-ignore
    map.current.jumpTo({ center: [lon, lat], zoom: 15 });

    return () => {
      marker.remove();
    };
  }, [lat, lon]);

  return (
    <div className={style.mapWrap}>
      <div ref={mapContainer} className={style.map} />
    </div>
  );
}
