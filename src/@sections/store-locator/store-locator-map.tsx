// import GoogleMap from '@components/google-map/google-map';
import { Container, Flex, Grid, InfiniteLoader, Section, Text } from '@components';
import GoogleMap from '@components/google-map/google-map';
import GoogleMapInfoWindow, { InfoWindow } from '@components/google-map/google-map-info-window';
import GoogleMapLoader, { GoogleMapLoaderStatus } from '@components/google-map/google-map-loader';
import GoogleMapMarker from '@components/google-map/google-map-marker';
import GoogleMapMarkerClusterer from '@components/google-map/google-map-marker-clusterer';
import GoogleMapSkeleton from '@components/google-map/google-map-skeleton';
import { autocompleteSource, calculateDistances, getBounds, IAutocompleteResult, IAutocompleteResultDetail, IGeoLocalized } from '@components/google-map/google-map.service';
import { ComponentProps } from '@components/types';
import Autocomplete from '@forms/autocomplete/autocomplete';
import { IAutocompleteItem } from '@forms/autocomplete/autocomplete-context';
import { Filter, filtersToParams, useDebounce, useFilters, useInfiniteLoader, useSearchParams } from '@hooks';
import { IFeatureType } from '@hooks/useFilters/filter';
import ContactCard from '@sections/contact-card/contact-card';
import { useCallback, useMemo, useState } from 'react';
import Dots from './store-locator-dots';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';
const USE_CLUSTERER = false;

export function filterStoreLocatorItem(key: string, item: StoreLocatorItem, value: any): boolean {
  switch (key) {
    case 'bounds':
      if (value && typeof value.contains === 'function') {
        // const position = new google.maps.LatLng(item.position.lat, item.position.lng);
        return value.contains(item.position);
      }
      return true;
    case 'category':
      return item.category && item.category.id === value;
    default:
      return false;
  }
}

type Props = {
  item: StoreLocatorHeadItem;
  items: StoreLocatorItem[];
  featureTypes: IFeatureType[];
}

export type StoreLocatorHeadItem = {
  category: string;
  title: string;
  abstract: string;
}

export type StoreLocatorHeadProps = ComponentProps<Props, HTMLDivElement>;

const StoreLocatorMap: React.FC<StoreLocatorHeadProps> = ({ item, items = [], featureTypes = [] }: StoreLocatorHeadProps) => {

  // deserialize queryString encoded params
  const { params, replaceParamsSilently } = useSearchParams();

  // using item filter callback from service
  const filterItem = useCallback(filterStoreLocatorItem, []);

  // initialize filters with items, featureTypes and queryString params
  const filterParams = params && params.filter;
  const { filteredItems, filters, setFilter, itemsWithOmittedKeys } = useFilters<StoreLocatorItem>(items, featureTypes, filterItem, filterParams);

  const [visibleItems, onMore, hasMore] = useInfiniteLoader(filteredItems);

  const [infoWindow, setInfoWindow] = useState<InfoWindow>();

  const [zoom, setZoom] = useState(9);

  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 43.6263318,
    lng: 12.6790557,
  });

  const [map, setMap] = useState<google.maps.Map>();

  const options = useMemo(() => ({
    zoom,
    center,
    gestureHandling: 'cooperative',
    // scrollwheel: false,
    // overviewMapControl: true,
    // scaleControl: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true,
  }), [center, zoom]);

  // fires when user make a change on filters
  function onFilterChange(filter: Filter, values?: any[]) {
    console.log('StoreLocatorMap.onFilterChange', filter, values);
    setFilter(filter, values);
    // pagination.goToPage(1);
    // serializing querystring filter
    const filterParams = filtersToParams(filters);
    // replaceParamsSilently({ filter: filterParams, pagination: { page: 1 } });
    replaceParamsSilently({ filter: filterParams });
  }

  const onLoad = (map: google.maps.Map) => {
    console.log('StoreLocatorMap.onLoad', map);
    setMap(map);
  };

  const onIdle = (m: google.maps.Map) => {
    // console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  const onBounds = (bounds: google.maps.LatLngBounds | undefined) => {
    // this.bounds = bounds;
    const filterBounds = filters.find(x => x.id === 'bounds');
    // console.log('StoreLocatorMap.onBounds', bounds, filterBounds);
    if (filterBounds) {
      if (bounds) {
        setFilter(filterBounds, [bounds]);
      }
    }
  }

  const onBoundsDebounced = useDebounce(onBounds);

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    // console.log('StoreLocatorMap.onMapClick');
    // avoid directly mutating state
    // setMarkers([...markers, { position: event.latLng! }]);
  };

  const onMarkerClick = (marker: IGeoLocalized) => {
    // console.log('onMarkerClick', marker);
    const item = marker as StoreLocatorItem;
    const content = /* html */`
      <div class="info-window">
        <div class="info-window__name">${item.name}</div>
        <div class="info-window__address">${item.address}</div>
        <div class="info-window__city">${item.city}</div>
        <div class="info-window__country">${item.country.name}</div>
        ${item.phoneNumber ? /* html */`<a class="info-window__phone" href="tel:${item.phoneNumber}">${item.phoneNumber}</a>` : ''}
        ${item.faxNumber ? /* html */`<a class="info-window__fax" href="tel:${item.faxNumber}">${item.faxNumber}</a>` : ''}
        ${item.contactEmail ? /* html */`<a class="info-window__email" href="mailto:${item.contactEmail}">${item.contactEmail}</a>` : ''}
      </div>
    `;
    setInfoWindow({
      position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
      content,
    });
  };

  const onItemClick = (item: StoreLocatorItem) => {
    if (map) {
      map.setCenter(item.position);
      map.setZoom(11);
    }
  }

  const onInfoWindowClose = () => {
    console.log('onInfoWindowClose');
    setInfoWindow(undefined);
  };

  function onStatus(status: string) {
    console.log('StoreLocatorMap.onStatus', status);
    if (status === GoogleMapLoaderStatus.Success) {
      // console.log(window.google.maps);
    }
  }

  function setPlace(place: IAutocompleteResultDetail) {
    const items = itemsWithOmittedKeys('bounds');
    if (map) {
      if (place && place.geometry) {
        let minimumBounds = null;
        if (items.length >= 2) {
          const center = place.geometry.location;
          const lat = center?.lat() || 0;
          const lng = center?.lng() || 0;
          calculateDistances(items, { lat, lng });
          items.sort((a, b) => {
            return a.distance - b.distance;
          });
          minimumBounds = new google.maps.LatLngBounds();
          for (let i = 0; i < 2; i++) {
            const item = items[i];
            const lat1 = item.position.lat;
            const lng1 = item.position.lng;
            const p1 = new google.maps.LatLng(lat1, lng1);
            minimumBounds.extend(p1);
            const lat2 = lat + (lat - lat1);
            const lng2 = lng + (lng - lng1);
            const p2 = new google.maps.LatLng(lat2, lng2);
            minimumBounds.extend(p2);
          }
        }
        if (place.geometry.viewport || minimumBounds) {
          let bounds = place.geometry.viewport || new google.maps.LatLngBounds();
          if (minimumBounds) {
            bounds = bounds.union(minimumBounds);
          }
          /*
          google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
            this.setZoom(Math.min(11, this.getZoom()));
          });
          // meh
          */
          map.fitBounds(bounds, 0);
        } else if (place.geometry.location) {
          map.setCenter(place.geometry.location);
          map.setZoom(11);
        }
      } else {
        const bounds = getBounds(items);
        /*
        google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
          this.setZoom(Math.min(11, this.getZoom()));
        })
        // meh;
        */
        map.fitBounds(bounds);
      }
    }
  }

  async function onAutocomplete(item_: IAutocompleteItem) {
    const item = item_ as IAutocompleteResult;
    // console.log('onSelect', item);
    if (!item) {
      return;
    }
    if ('geometry' in item) {
      setPlace(item as unknown as IAutocompleteResultDetail);
    } else if (typeof item.getDetails === 'function' && map) {
      const place = await item.getDetails(map);
      setPlace(place);
    }
  }

  return (
    <>
      <Section padding="2rem 0" position="relative" overflow="hidden">
        <Dots />
        <Container position="relative" textAlign="center">
          <Text size="10" textTransform="uppercase">{item.category}</Text>
          <Text size="2" marginBottom="1rem" fontWeight="700">{item.title}</Text>
          <Text size="8" margin="0 auto 2rem auto" maxWidth="70ch" dangerouslySetInnerHTML={{ __html: item.abstract }}></Text>
          <Flex.Row>
            <Autocomplete background="var(--color-neutral-100)" name="search" placeholder="search..." source={autocompleteSource} onAutocomplete={onAutocomplete}></Autocomplete>
          </Flex.Row>
        </Container>
      </Section>
      <GoogleMapLoader apiKey={API_KEY} language="it" region="it" libraries={['places']} skeleton={() => <GoogleMapSkeleton></GoogleMapSkeleton>} onStatus={onStatus}>
        <GoogleMap {...options} height="Min(100vw, 600px)" position="relative" onLoad={onLoad} onIdle={onIdle} onBounds={onBoundsDebounced} onClick={onMapClick}>
          {USE_CLUSTERER ?
            <GoogleMapMarkerClusterer items={items} onClick={onMarkerClick} /> :
            items.map((item, i) => (
              <GoogleMapMarker key={i} position={item.position} icon={"/map/marker-sm.png"} onClick={() => onMarkerClick(item)} />
            ))}
          <GoogleMapInfoWindow {...infoWindow} onClose={onInfoWindowClose} />
        </GoogleMap>
      </GoogleMapLoader>
      <Section>
        <Container minHeight="50vh">
          <Grid.Row columnGap="1rem" rowGap="1rem">
            {visibleItems.map((item, i) => (
              <Grid key={i} sm={6} md={4} lg={3}>
                <ContactCard item={item} height="100%" hoverable={true} onClick={() => onItemClick(item)} />
              </Grid>
            ))}
          </Grid.Row>
          {hasMore && <InfiniteLoader onMore={onMore}>more</InfiniteLoader>}
        </Container>
      </Section>
    </>
  );
}

export const StoreLocatorMapDefaults = {
  item: {
    category: 'Stores',
    title: 'Search for dealers',
    abstract: `<p>Hexagon is present through a network of authorised points of sale and distributors.</p>
    <p>We therefore advise consumers to purchase only from these points of sale, which will be able to guarantee the originality and quality of the products as well as excellent design, sales and after-sales service.</p>`,
  }
};

StoreLocatorMap.defaultProps = StoreLocatorMapDefaults;

export default StoreLocatorMap;

export interface StoreLocatorItem extends IGeoLocalized {
  id: number;
  name: string;
  address: string;
  zipCode: string;
  city: string;
  province: string;
  country: {
    id: number;
    name: string
  };
  phoneNumber?: string;
  faxNumber?: string;
  contactEmail?: string;
  website: string;
  category: {
    id: number;
    name: string
  };
  rank: number;
  distance: number;
  related: any;
}
