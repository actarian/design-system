
import React from 'react';
import XCircleSvg from '../icons/x-circle.svg';

const XCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XCircleSvg {...props} ref={ref} />);
});

XCircle.displayName = 'XCircle';

export default XCircle;

// export default () => <XCircle />;
        