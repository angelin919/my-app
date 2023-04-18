import React from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer, Tooltip, CircleMarker, Polygon} from 'react-leaflet'

const center=[55.769667, 37.627671]
const centerPolygon = [
    [
        [55.790823, 37.539031],
        [55.688479, 37.521845],
        [55.690906, 37.775819],
        [55.813141, 37.760065],
    ]
]
const colorOpt={color:'purple',}
const Contacts = () => {
  return (
    <div>
        <MapContainer 
        center={center}
        zoom={10}
        style={{
            width:'100vw',
            height:"500px"
        }}
        >
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=KSRadAA2TUeuC7v7nSwk'
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            
            />
            <CircleMarker 
            center={center}
            pathOptions={{
                color: 'black'
            }}
            radius={5}
            />
            <Marker position={center}>
                <Popup>Мы находимся здесь</Popup>
                <Tooltip>При наведении</Tooltip>
            </Marker>
            <Polygon positions={centerPolygon} pathOptions={colorOpt}/>

        </MapContainer>
    </div>

  )
}

export default Contacts