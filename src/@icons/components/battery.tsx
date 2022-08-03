
import React from 'react';
import BatterySvg from '../icons/battery.svg';

const Battery = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BatterySvg {...props} ref={ref} />);
});

Battery.displayName = 'Battery';

export default Battery;

// export default () => <Battery />;
        