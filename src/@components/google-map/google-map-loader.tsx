
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

export enum GoogleMapLoaderStatus {
  LOADING = 'LOADING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
};

/**
 * The `GoogleMapLoaderProps` interface extends the `LoaderOptions` interface from
 * [@googlemaps/js-api-loader](https://npmjs.com/package/@googlemaps/js-api-loader).
 * See the reference documentation for
 * [LoaderOptions](https://googlemaps.github.io/js-api-loader/interfaces/LoaderOptions.html)
 * for a complete list of all props that are available.
 */
export interface GoogleMapLoaderProps extends LoaderOptions {
  /**
   * Children wrapped by the `<GoogleMapLoader>{elements}</GoogleMapLoader`.
   */
  children?: ReactNode;
  /**
   * Render prop used to switch on the status.
   */
  render?: (status: GoogleMapLoaderStatus) => ReactElement;
  /**
   * Callback prop used to access `@googlemaps/js-api-loader` and `GoogleMapLoaderStatus`.
   *
   * Note: The callback be executed multiple times in the lifecycle of the component.
   */
  callback?: (status: GoogleMapLoaderStatus, loader: Loader) => void;
}

/**
 * A component to wrap the loading of the Google Maps JavaScript API.
 *
 * ```
 * import { GoogleMapLoader } from '@googlemaps/react-wrapper';
 *
 * const MyApp = () => (
 * 	<GoogleMapLoader apiKey={'YOUR_API_KEY'}>
 * 		<GoogleMap />
 * 	</GoogleMapLoader>
 * );
 * ```
 *
 * @param props
 */
export const GoogleMapLoader = ({ children, render, callback, ...options }: GoogleMapLoaderProps): ReactElement => {
  const [status, setStatus] = useState(GoogleMapLoaderStatus.LOADING);

  useEffect(() => {
    const loader = new Loader(options);
    const setStatusAndExecuteCallback = (status: GoogleMapLoaderStatus) => {
      if (callback) {
        callback(status, loader);
      }
      setStatus(status);
    };
    setStatusAndExecuteCallback(GoogleMapLoaderStatus.LOADING);
    loader.load().then(
      () => setStatusAndExecuteCallback(GoogleMapLoaderStatus.SUCCESS),
      () => setStatusAndExecuteCallback(GoogleMapLoaderStatus.FAILURE)
    );
  }, []);

  if (status === GoogleMapLoaderStatus.SUCCESS && children) {
    return <>{children}</>;
  }

  if (render) {
    return render(status);
  }

  return <></>;
};
