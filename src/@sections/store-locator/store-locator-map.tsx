// import GoogleMap from '@components/google-map/google-map';
import GoogleMap from '@components/google-map/google-map';
import GoogleMapInfoWindow from '@components/google-map/google-map-info-window';
import { GoogleMapLoader, GoogleMapLoaderStatus } from '@components/google-map/google-map-loader';
import GoogleMapMarker, { IMarker } from '@components/google-map/google-map-marker';
import GoogleMapMarkerClusterer from '@components/google-map/google-map-markerclusterer';
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

const render = (status: GoogleMapLoaderStatus) => {
  return <h1>{status}</h1>;
};

const StoreLocatorMap = ({ items = [] }: { items: StoreLocatorItem[] }) => {

  const [markers, setMarkers] = React.useState<StoreLocatorItem[]>(items);

  const [infoWindow, setInfoWindow] = React.useState<InfoWindow | null>(null);

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
  }), [center, zoom]);

  const onLoad = (map: google.maps.Map) => {
    console.log('onLoad', map);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  const onClick = (e: google.maps.MapMouseEvent) => {
    console.log('onClick');
    // avoid directly mutating state
    // setMarkers([...markers, { position: e.latLng! }]);
  };

  const onMarkerClick = (marker: IMarker) => {
    console.log('onMarkerClick', marker);
    const item = marker as StoreLocatorItem;
    const content = /* html */`
      <div class="info-window">
        <div class="info-window__name">${item.name}</div>
        <div class="info-window__address">${item.address}</div>
        <div class="info-window__city">${item.city}</div>
        <div class="info-window__country">${item.country.name}</div>
        ${item.phone ? /* html */`<a class="info-window__phone" href="tel:${item.phone}">${item.phone}</a>` : ''}
        ${item.fax ? /* html */`<a class="info-window__fax" href="tel:${item.fax}">${item.fax}</a>` : ''}
        ${item.email ? /* html */`<a class="info-window__email" href="mailto:${item.email}">${item.email}</a>` : ''}
      </div>
    `;
    setInfoWindow({
      position: marker.position,
      content,
    });
  };

  const onInfoWindowClose = () => {
    console.log('onInfoWindowClose');
    setInfoWindow(null);
  };

  return (
    <GoogleMapLoader apiKey={API_KEY} render={render} libraries={['places']}>
      <GoogleMap {...options} height="Min(100vw, 600px)" onLoad={onLoad} onIdle={onIdle} onClick={onClick}>
        {false && markers.map((marker, i) => (
          <GoogleMapMarker key={i} position={marker.position} icon={"/map/marker-sm.png"} onClick={() => onMarkerClick(marker)} />
        ))}
        {true && <GoogleMapMarkerClusterer items={markers} onClick={onMarkerClick} />}
        <GoogleMapInfoWindow {...infoWindow} onClose={onInfoWindowClose} />
      </GoogleMap>
    </GoogleMapLoader>
  );
}

export default StoreLocatorMap;

export interface StoreLocatorItem extends IMarker {
  id: number,
  name: string,
  address: string,
  zipCode: string,
  city: string,
  province: string,
  country: {
    id: number,
    name: string
  },
  phone?: string,
  fax?: string,
  email?: string,
  website: string,
  category: {
    id: number,
    name: string
  },
  rank: number,
  distance: number,
  related: any
}

export type InfoWindow = {
  position: google.maps.LatLng;
  content: string;
}
