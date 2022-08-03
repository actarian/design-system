
import React from 'react';
import CornerUpRightSvg from '../icons/corner-up-right.svg';

const CornerUpRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerUpRightSvg {...props} ref={ref} />);
});

CornerUpRight.displayName = 'CornerUpRight';

export default CornerUpRight;

// export default () => <CornerUpRight />;
        