
import React from 'react';
import XCircle from '../icons/x-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XCircle {...props} ref={ref} />);
});

// export default () => <XCircle />;
        