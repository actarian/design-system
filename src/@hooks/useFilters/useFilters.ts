import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Filter, IFeatureType } from './filter';
import { getFilters, setFilters } from './filter.service';

export type FilterParams = { [key: string]: any[] };
export type FilterValues = any[][];

export function useFilters<T>(items: T[], featureTypes: IFeatureType[], filterItem: (key: string, item: any, value: any) => boolean, initialValues?: FilterParams) {
  // console.log('useFilters', params);

  // creating filters with useMemo because is an heavy operation
  const filters = useMemo(() => {
    return getFilters<T>(items, featureTypes, filterItem, initialValues);
  }, [featureTypes, filterItem]);

  const [filteredItems, setFilteredItems] = useState<T[]>(() => setFilters(items, filters));

  // setFilter is called when user select a filter value
  const setFilter = useCallback((filter?: Filter, values?: any[]) => {
    const filteredItems = setFilters(items, filters, filter, values);
    setFilteredItems(filteredItems);
  }, [items, filters]);

  const itemsWithOmittedKeys = useCallback((...keys: string[]) => {
    const filtersWithOmittedKeys = filters.filter(x => !keys.includes(x.id));
    const filteredItems = setFilters(items, filtersWithOmittedKeys);
    return filteredItems;
  }, [items, filters]);

  // initial call to setFilter
  useEffect(() => {
    setFilter();
    return () => { };
  }, [items, featureTypes]);

  return { filteredItems, filters, setFilter, itemsWithOmittedKeys };
}
