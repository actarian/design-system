
import { Skeleton } from '@components';
import { GoogleMapLoaderStatus } from './google-map-loader';

const GoogleMapSkeleton = (status: GoogleMapLoaderStatus) => (
  <Skeleton height="Min(100vw, 600px)" loading={true}></Skeleton>
);

export default GoogleMapSkeleton;
