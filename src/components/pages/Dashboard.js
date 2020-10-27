import React from 'react'
import { Marker } from 'react-google-maps';

import Map from '../molecules/Map'

export default function Dashboard() {
  return (
    <div>
      <h1>Da dashboard!</h1>
      <Map>
        <Marker position={{ lat: 21.223523, lng: -101.332238 }} />
      </Map>
    </div>
  )
}
