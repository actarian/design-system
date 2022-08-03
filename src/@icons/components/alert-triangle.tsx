
import React from 'react';
import AlertTriangleSvg from '../icons/alert-triangle.svg';

const AlertTriangle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertTriangleSvg {...props} ref={ref} />);
});

AlertTriangle.displayName = 'AlertTriangle';

export default AlertTriangle;

// export default () => <AlertTriangle />;
        