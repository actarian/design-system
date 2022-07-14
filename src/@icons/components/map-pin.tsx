
import React from 'react';
import MapPin from '../icons/map-pin.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MapPin {...props} ref={ref} />);
});

// export default () => <MapPin />;
        