
import React from 'react';
import ClockSvg from '../icons/clock.svg';

const Clock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClockSvg {...props} ref={ref} />);
});

Clock.displayName = 'Clock';

export default Clock;

// export default () => <Clock />;
        