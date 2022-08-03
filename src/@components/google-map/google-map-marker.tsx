import React, { MouseEvent, useEffect, useState } from 'react';
import { useGoogleMapContext } from './google-map-context';

export interface GoogleMapMarkerProps extends google.maps.MarkerOptions {
  map?: google.maps.Map,
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const GoogleMapMarker: React.FC<GoogleMapMarkerProps> = ({
  onClick,
  ...options
}) => {

  const { map } = useGoogleMapContext();

  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker && map) {
      const onClick_ = (event: MouseEvent<HTMLElement>) => {
        if (onClick) {
          onClick(event);
        }
      };
      const instance = new google.maps.Marker();
      instance.setMap(map || null);
      instance.addListener('click', onClick_)
      setMarker(instance);
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
        marker.unbindAll()
      }
    };
  }, [marker, map, onClick]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default GoogleMapMarker;
