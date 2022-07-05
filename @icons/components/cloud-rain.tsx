
import React from 'react';
import CloudRain from '../icons/cloud-rain.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudRain {...props} ref={ref} />);
});

// export default () => <CloudRain />;
        