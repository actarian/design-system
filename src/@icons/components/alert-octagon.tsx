
import React from 'react';
import AlertOctagonSvg from '../icons/alert-octagon.svg';

const AlertOctagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertOctagonSvg {...props} ref={ref} />);
});

AlertOctagon.displayName = 'AlertOctagon';

export default AlertOctagon;

// export default () => <AlertOctagon />;
        