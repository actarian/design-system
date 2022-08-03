
import React from 'react';
import MoreVerticalSvg from '../icons/more-vertical.svg';

const MoreVertical = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoreVerticalSvg {...props} ref={ref} />);
});

MoreVertical.displayName = 'MoreVertical';

export default MoreVertical;

// export default () => <MoreVertical />;
        