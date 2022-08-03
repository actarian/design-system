
import React from 'react';
import CornerDownRightSvg from '../icons/corner-down-right.svg';

const CornerDownRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerDownRightSvg {...props} ref={ref} />);
});

CornerDownRight.displayName = 'CornerDownRight';

export default CornerDownRight;

// export default () => <CornerDownRight />;
        