
import React from 'react';
import CornerRightUpSvg from '../icons/corner-right-up.svg';

const CornerRightUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerRightUpSvg {...props} ref={ref} />);
});

CornerRightUp.displayName = 'CornerRightUp';

export default CornerRightUp;

// export default () => <CornerRightUp />;
        