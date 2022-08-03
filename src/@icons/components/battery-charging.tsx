
import React from 'react';
import BatteryChargingSvg from '../icons/battery-charging.svg';

const BatteryCharging = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatteryChargingSvg {...props} ref={ref} />);
});

BatteryCharging.displayName = 'BatteryCharging';

export default BatteryCharging;

// export default () => <BatteryCharging />;
        