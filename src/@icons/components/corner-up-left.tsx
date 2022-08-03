
import React from 'react';
import CornerUpLeftSvg from '../icons/corner-up-left.svg';

const CornerUpLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerUpLeftSvg {...props} ref={ref} />);
});

CornerUpLeft.displayName = 'CornerUpLeft';

export default CornerUpLeft;

// export default () => <CornerUpLeft />;
        