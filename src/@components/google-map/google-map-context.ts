import React, { MutableRefObject } from 'react';

const defaultContext = {
  map: undefined,
};

export interface IGoogleMapContext {
  map: google.maps.Map | undefined;
  ref?: MutableRefObject<HTMLElement | null>;
}

export const GoogleMapContext = React.createContext<IGoogleMapContext>(defaultContext);

export function useGoogleMapContext(): IGoogleMapContext {
  return React.useContext<IGoogleMapContext>(GoogleMapContext);
}
