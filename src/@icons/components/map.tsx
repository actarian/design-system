
import React from 'react';
import MapSvg from '../icons/map.svg';

const Map = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MapSvg {...props} ref={ref} />);
});

Map.displayName = 'Map';

export default Map;

// export default () => <Map />;
        