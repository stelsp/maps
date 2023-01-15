import React, { FC } from "react";
import { useAppSelector } from "../../store/hooks";

const MapContainer: FC = () => {
  const { coords } = useAppSelector((state) => state.data);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      lat:{coords.lat} lon:{coords.lon}
    </div>
  );
};

export default MapContainer;
