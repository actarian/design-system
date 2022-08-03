
import React from 'react';
import CloudLightningSvg from '../icons/cloud-lightning.svg';

const CloudLightning = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudLightningSvg {...props} ref={ref} />);
});

CloudLightning.displayName = 'CloudLightning';

export default CloudLightning;

// export default () => <CloudLightning />;
        