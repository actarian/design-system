import MarkerClusterer, { ClusterIconStyle } from '@googlemaps/markerclustererplus';
import React, { useEffect, useState } from 'react';
import { useGoogleMapContext } from "./google-map-context";
import { IGeoLocalized } from "./google-map.service";

export interface GoogleMapMarkerClustererPlusProps {
  items: IGeoLocalized[];
  map?: google.maps.Map,
  onClick?: (item: IGeoLocalized) => void;
}

const GoogleMapMarkerClustererPlus: React.FC<GoogleMapMarkerClustererPlusProps> = ({
  items = [],
  onClick,
}) => {

  const { map } = useGoogleMapContext();

  const [markers, setMarkers] = useState<google.maps.Marker[]>();

  useEffect(() => {
    const onClick_ = (item: IGeoLocalized) => {
      if (onClick) {
        onClick(item);
      }
    }
    const instances = items.map(item => {
      const icon = {
        url: `/map/marker-sm.png`,
        size: new google.maps.Size(24, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 32),
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
      instances.forEach(x => x.unbindAll());
    };
  }, [items, map, onClick]);

  useEffect(() => {
    let instance:MarkerClusterer;
    if (map && markers) {
      instance = new MarkerClusterer(map, markers, {
        imagePath: `/map/cluster-`,
      });
      const styles = instance.getStyles();
      const sizes = [48, 56, 64, 72, 80];
      styles.forEach((style: ClusterIconStyle, i: number) => {
        style.width = sizes[i];
        style.height = sizes[i];
        style.textLineHeight = sizes[i];
        style.textSize = Math.floor(style.width / 5);
        style.textColor = '#ffffff';
      });
      instance.setStyles(styles);
    }
    // remove clusterer from map on unmount
    return () => {
      if (instance) {
        instance.clearMarkers();
        instance.setMap(null);
      }
    };
  }, [map, markers]);

  return null;
};

export default GoogleMapMarkerClustererPlus;
