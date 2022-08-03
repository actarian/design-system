
import React from 'react';
import XOctagonSvg from '../icons/x-octagon.svg';

const XOctagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XOctagonSvg {...props} ref={ref} />);
});

XOctagon.displayName = 'XOctagon';

export default XOctagon;

// export default () => <XOctagon />;
        