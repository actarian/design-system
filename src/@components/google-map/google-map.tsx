import { Box, ComponentCssResponsiveProps } from '@components';
import React, { forwardRef, ReactNode, useImperativeHandle, useMemo, useRef } from 'react';
import { GoogleMapContext, IGoogleMapContext } from './google-map-context';
import { useDeepCompareEffectForMaps } from './google-map-hooks';
import { GoogleMapStyle } from './google-map.style';

export interface Props extends google.maps.MapOptions {
  onLoad?: (map: google.maps.Map) => void;
  onIdle?: (map: google.maps.Map) => void;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  children?: ReactNode;
}

export type GoogleMapProps = ComponentCssResponsiveProps<Props, HTMLDivElement>

const GoogleMap = forwardRef<HTMLDivElement, GoogleMapProps>(({
  onLoad,
  onIdle,
  onClick,
  children,
  ...options
}: GoogleMapProps, ref) => {

  options.height = options.height || '600px';

  options.zoom = options.zoom || 8;
  options.center = options.center || { lat: 43.6263318, lng: 12.6790557 };
  options.styles = options.styles || GoogleMapStyle;

  const innerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

  const [map, setMap] = React.useState<google.maps.Map>();

  const contextValue: IGoogleMapContext = useMemo(() => ({
    map,
    innerRef,
  }), [map, innerRef]);

  React.useEffect(() => {
    if (innerRef.current && !map) {
      const map_ = new window.google.maps.Map(innerRef.current, options);
      setMap(map_);
      if (onLoad) {
        onLoad(map_);
      }
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
      /*
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
      */
      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
      if (onClick) {
        map.addListener('click', onClick);
      }
    }
    return () => {
      /*
      if (map) {
        map.unbindAll();
      }
      */
    }
  }, [map, onLoad, onIdle, onClick]);

  return (
    <GoogleMapContext.Provider value={contextValue}>
      <Box ref={innerRef} id="map" {...options} />
      {children}
      {false && React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        // set the map prop on the child component
        return React.cloneElement(child, { map });
      })}
    </GoogleMapContext.Provider>
  );
});

export default GoogleMap;
