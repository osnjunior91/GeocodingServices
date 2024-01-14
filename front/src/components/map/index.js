import React, { useEffect } from 'react';
import { MapContainer, TileLayer, LayerGroup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ShowMap = ({ latitude, longitude }) => {
    const [markerPosition] = React.useState([latitude, longitude]);
    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <LayerGroup>
                <Circle center={markerPosition} pathOptions={{ fillColor: 'blue' }} radius={600} />
            </LayerGroup>
        </MapContainer>
    );
};

export default ShowMap;
