import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React from 'react';
import Map from './map';
import Marker from './marker';

/*
const render = (status:Status) => {
  switch (status) {
    case Status.LOADING:
      return 'spinner';
    case Status.FAILURE:
      return 'error';
    case Status.SUCCESS:
      return <Map />;
  }
};
*/

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const GoogleMap = () => {

  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);

  const [zoom, setZoom] = React.useState(9);

  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 43.6263318,
    lng: 12.6790557,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    console.log('onClick');
    // avoid directly mutating state
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <>
      <Wrapper apiKey={'AIzaSyDvGw6iAoKdRv8mmaC9GeT-LWLPQtA8p60'} render={render}>
        <Map center={center} onClick={onClick} onIdle={onIdle} zoom={zoom}>
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
    </>
  );
}

export default GoogleMap;
