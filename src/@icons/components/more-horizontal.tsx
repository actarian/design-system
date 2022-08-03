
import React from 'react';
import MoreHorizontalSvg from '../icons/more-horizontal.svg';

const MoreHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoreHorizontalSvg {...props} ref={ref} />);
});

MoreHorizontal.displayName = 'MoreHorizontal';

export default MoreHorizontal;

// export default () => <MoreHorizontal />;
        