// import GoogleMap from '@components/google-map/google-map';
import { GoogleMapStyle } from '@components/google-map/google-map.style';
import { GoogleMap, LoadScript, MarkerClusterer, MarkerF } from '@react-google-maps/api';
import React, { useMemo } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';

/*
const render = (status:GoogleMapLoaderStatus) => {
  switch (status) {
    case GoogleMapLoaderStatus.LOADING:
      return 'spinner';
    case GoogleMapLoaderStatus.FAILURE:
      return 'error';
    case GoogleMapLoaderStatus.SUCCESS:
      return <Map />;
  }
};
*/

function createKey(i: number, marker: StoreLocatorItem) {
  return i;
  // return `${i}-${marker.position.lat}-${marker.position.lng}`;
}

const StoreLocatorMap = ({ items = [] }: { items: StoreLocatorItem[] }) => {

  const [markers, setMarkers] = React.useState<StoreLocatorItem[]>(items);

  const [zoom, setZoom] = React.useState(9);

  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 43.6263318,
    lng: 12.6790557,
  });

  const options = useMemo(() => ({
    zoom,
    center,
    // scrollwheel: false,
    gestureHandling: 'cooperative',
    // overviewMapControl: true,
    // scaleControl: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true,
    styles: GoogleMapStyle,
  }), [center, zoom]);

  const markerClusterOptions = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  const onClick = (e: google.maps.MapMouseEvent) => {
    console.log('onClick');
    // avoid directly mutating state
    // setMarkers([...markers, { position: e.latLng! }]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <>
      <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
        <GoogleMap mapContainerStyle={{ height: 'Min(100vh, 600px)' }} {...options}>
          <MarkerClusterer options={markerClusterOptions}>
            {(clusterer) => markers.map((marker, i) => (
              <MarkerF key={createKey(i, marker)} position={marker.position} clusterer={clusterer} />
            )) as any}
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default StoreLocatorMap;

export type StoreLocatorItem = {
  id: number,
  position: google.maps.LatLng,
  name: string,
  address: string,
  zipCode: string,
  city: string,
  province: string,
  country: {
    id: number,
    name: string
  },
  phone: string,
  email: string,
  website: string,
  category: {
    id: number,
    name: string
  },
  rank: number,
  distance: number,
  related: any
}
