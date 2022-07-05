
import React from 'react';
import WifiOff from '../icons/wifi-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WifiOff {...props} ref={ref} />);
});

// export default () => <WifiOff />;
        