
import React from 'react';
import CloudSnowSvg from '../icons/cloud-snow.svg';

const CloudSnow = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSnowSvg {...props} ref={ref} />);
});

CloudSnow.displayName = 'CloudSnow';

export default CloudSnow;

// export default () => <CloudSnow />;
        