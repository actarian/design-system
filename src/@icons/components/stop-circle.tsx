
import React from 'react';
import StopCircle from '../icons/stop-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StopCircle {...props} ref={ref} />);
});

// export default () => <StopCircle />;
        