
import React from 'react';
import CornerDownLeftSvg from '../icons/corner-down-left.svg';

const CornerDownLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerDownLeftSvg {...props} ref={ref} />);
});

CornerDownLeft.displayName = 'CornerDownLeft';

export default CornerDownLeft;

// export default () => <CornerDownLeft />;
        