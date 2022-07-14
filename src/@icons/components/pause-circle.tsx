
import React from 'react';
import PauseCircle from '../icons/pause-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PauseCircle {...props} ref={ref} />);
});

// export default () => <PauseCircle />;
        