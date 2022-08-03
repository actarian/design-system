
import React from 'react';
import MonitorSvg from '../icons/monitor.svg';

const Monitor = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MonitorSvg {...props} ref={ref} />);
});

Monitor.displayName = 'Monitor';

export default Monitor;

// export default () => <Monitor />;
        