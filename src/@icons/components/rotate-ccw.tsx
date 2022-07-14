
import React from 'react';
import RotateCcw from '../icons/rotate-ccw.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RotateCcw {...props} ref={ref} />);
});

// export default () => <RotateCcw />;
        