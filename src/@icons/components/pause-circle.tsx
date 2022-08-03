
import React from 'react';
import PauseCircleSvg from '../icons/pause-circle.svg';

const PauseCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PauseCircleSvg {...props} ref={ref} />);
});

PauseCircle.displayName = 'PauseCircle';

export default PauseCircle;

// export default () => <PauseCircle />;
        