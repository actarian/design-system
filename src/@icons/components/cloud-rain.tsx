
import React from 'react';
import CloudRainSvg from '../icons/cloud-rain.svg';

const CloudRain = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudRainSvg {...props} ref={ref} />);
});

CloudRain.displayName = 'CloudRain';

export default CloudRain;

// export default () => <CloudRain />;
        