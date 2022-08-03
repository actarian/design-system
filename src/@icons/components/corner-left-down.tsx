
import React from 'react';
import CornerLeftDownSvg from '../icons/corner-left-down.svg';

const CornerLeftDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerLeftDownSvg {...props} ref={ref} />);
});

CornerLeftDown.displayName = 'CornerLeftDown';

export default CornerLeftDown;

// export default () => <CornerLeftDown />;
        