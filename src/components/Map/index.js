import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map({ selectPosition }) {
  const locationSelection = [selectPosition?.lat, selectPosition?.lon]
  const position = [-3.7304512, -38.5217989]

  function ResetCenterView(props) {
    const { selectPosition } = props;
    const map = useMap();

    useEffect(() => {
      if (selectPosition) {
        map.flyTo([selectPosition?.lat,selectPosition?.lon], 15)
      }
    }, [selectPosition]);

    return null;
  }

  return (
    <MapContainer zoomControl={false} center={position} zoom={11} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectPosition && (
        <Marker position={locationSelection}>
          <Popup>
            {selectPosition.display_name.split(",")[0]}
          </Popup>
        </Marker>
      )}

      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}