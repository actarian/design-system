import { Box } from '@components';
import React, { ReactNode } from 'react';
import { useDeepCompareEffectForMaps } from './hooks';

export interface MapProps extends google.maps.MapOptions {
  zoom?: number,
  center?: google.maps.LatLngLiteral,
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: ReactNode;
}

const Map: React.FC<MapProps> = ({
  zoom = 8,
  center = { lat: 43.6263318, lng: 12.6790557 },
  style,
  onClick,
  onIdle,
  children,
  ...options
}: MapProps) => {

  const ref = React.useRef<HTMLDivElement>(null);

  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center, zoom
      }));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
      if (onClick) {
        map.addListener('click', onClick);
      }
      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);
  return (
    <>
      <Box ref={ref} id="map" aspectRatio={2} style={style} />
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        // set the map prop on the child component
        return React.cloneElement(child, { map });
      })}
    </>
  );
  // [END maps_react_map_component_return]
}

export default Map;
