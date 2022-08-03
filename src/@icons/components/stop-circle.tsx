
import React from 'react';
import StopCircleSvg from '../icons/stop-circle.svg';

const StopCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StopCircleSvg {...props} ref={ref} />);
});

StopCircle.displayName = 'StopCircle';

export default StopCircle;

// export default () => <StopCircle />;
        