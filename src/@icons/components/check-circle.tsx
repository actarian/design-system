
import React from 'react';
import CheckCircleSvg from '../icons/check-circle.svg';

const CheckCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckCircleSvg {...props} ref={ref} />);
});

CheckCircle.displayName = 'CheckCircle';

export default CheckCircle;

// export default () => <CheckCircle />;
        