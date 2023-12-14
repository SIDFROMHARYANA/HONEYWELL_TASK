import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ cities }) => {
  const center = [0, 0]; 

  return (
    <div className="map-container">
      
    <MapContainer center={center} zoom={2} style={{ height: "500px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      </MapContainer>
    </div>
  );
};

export default Map;
