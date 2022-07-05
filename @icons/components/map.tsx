
import React from 'react';
import Map from '../icons/map.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Map {...props} ref={ref} />);
});

// export default () => <Map />;
        