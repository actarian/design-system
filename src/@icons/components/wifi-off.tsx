
import React from 'react';
import WifiOffSvg from '../icons/wifi-off.svg';

const WifiOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WifiOffSvg {...props} ref={ref} />);
});

WifiOff.displayName = 'WifiOff';

export default WifiOff;

// export default () => <WifiOff />;
        