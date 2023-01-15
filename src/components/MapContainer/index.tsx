import React, { FC } from "react";

interface IMap {
  coords: {
    lat: number;
    lon: number;
  };
}

const MapContainer: FC<IMap> = ({ coords }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      lat:{coords.lat} lon:{coords.lon}
    </div>
  );
};

export default MapContainer;
