
import React from 'react';
import WifiSvg from '../icons/wifi.svg';

const Wifi = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WifiSvg {...props} ref={ref} />);
});

Wifi.displayName = 'Wifi';

export default Wifi;

// export default () => <Wifi />;
        