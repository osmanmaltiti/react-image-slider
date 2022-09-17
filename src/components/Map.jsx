import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React from 'react';

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCc1g5Hmlth_forkPgYqj1DCxxJFldhCYo',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default MapView;

const Map = () => {
  const center = React.useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};
