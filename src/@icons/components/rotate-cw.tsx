
import React from 'react';
import RotateCwSvg from '../icons/rotate-cw.svg';

const RotateCw = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RotateCwSvg {...props} ref={ref} />);
});

RotateCw.displayName = 'RotateCw';

export default RotateCw;

// export default () => <RotateCw />;
        