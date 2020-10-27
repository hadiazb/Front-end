import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"



export default function Map({ children }) {

  const UltimaMillaMap = withScriptjs(withGoogleMap((props) => <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 21.223523, lng: -101.332238 }}
  >
    {children}
  </GoogleMap>
  ))

  return <UltimaMillaMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  >
    {children}
  </UltimaMillaMap>
}
