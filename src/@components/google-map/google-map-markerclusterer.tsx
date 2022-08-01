// import MarkerClusterer from '@googlemaps/markerclustererplus';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import React, { useEffect, useState } from 'react';
import { useGoogleMapContext } from "./google-map-context";
import { IMarker } from './google-map-marker';

export interface GoogleMapMarkerClustererProps {
  items: IMarker[];
  map?: google.maps.Map,
  onClick?: (item: IMarker) => void;
}

const GoogleMapMarkerClusterer: React.FC<GoogleMapMarkerClustererProps> = ({
  items = [],
  onClick,
}) => {

  const { map } = useGoogleMapContext();

  const [markers, setMarkers] = useState<google.maps.Marker[]>();

  const [clusterer, setClusterer] = useState<MarkerClusterer>();

  const onClick_ = (item: IMarker) => {
    if (onClick) {
      onClick(item);
    }
  }

  useEffect(() => {
    const instances = items.map(item => {
      const icon = {
        url: `/map/marker-sm.png`,
        size: new google.maps.Size(24, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        // scaledSize: new google.maps.Size(25, 25)
      };
      const marker = new google.maps.Marker({
        position: item.position,
        icon,
        map,
      });
      marker.addListener('click', () => {
        onClick_(item);
      });
      return marker;
    });
    setMarkers(instances);
    // remove marker from map on unmount
    return () => {
      if (markers) {
        markers.forEach(marker => {
          marker.unbindAll();
        });
      }
    };
  }, [items]);

  useEffect(() => {
    if (clusterer) {
      clusterer.clearMarkers();
    }
    if (map && markers) {
      console.log('MarkerClusterer 2', map);
      /*
      const instance = new MarkerClusterer(map, markers, {
        imagePath: `/map/cluster-`,
      });
      */
      const instance = new MarkerClusterer({
        map,
        markers,
        // algorithm: new NoopAlgorithm({}),
        // algorithm: new GridAlgorithm({ maxDistance: 40000 }),
        // algorithm: new SuperClusterAlgorithm({}),
        renderer: {
          render: ({ markers, position }) => {
            const count = markers ? markers.length : 0;
            const size = Math.max(1, Math.min(5, Math.ceil(count / 5)));
            const icon = {
              url: `/map/cluster-${size}.png`,
              size: new google.maps.Size(40 + size * 8, 40 + size * 8),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              // scaledSize: new google.maps.Size(25, 25)
            };
            return new google.maps.Marker({
              position: {
                lat: position.lat(),
                lng: position.lng(),
              },
              map,
              /*
              // do not use label cause it is very slow
              label: {
                text: count.toString(),
                color: 'white',
                fontSize: '12px',
              },
              */
              icon,
            });
          },
        }
      });
      /*
      const styles = instance.getStyles();
      const sizes = [48, 56, 64, 72, 80];
      styles.forEach((style: any, i: number) => {
        style.width = sizes[i];
        style.height = sizes[i];
        style.textLineHeight = sizes[i];
        style.textSize = Math.floor(style.width / 5);
        style.textColor = '#ffffff';
      });
      instance.setStyles(styles);
      */
      setClusterer(instance);
    }
    // remove clusterer from map on unmount
    return () => {
      if (clusterer) {
        clusterer.clearMarkers();
      }
    };
  }, [map, markers]);

  /*
  useEffect(() => {
    if (clusterer) {
      clusterer.setOptions(options);
    }
  }, [clusterer, options]);
  */

  return null;
};

export default GoogleMapMarkerClusterer;
