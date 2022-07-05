
import React from 'react';
import BatteryCharging from '../icons/battery-charging.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatteryCharging {...props} ref={ref} />);
});

// export default () => <BatteryCharging />;
        