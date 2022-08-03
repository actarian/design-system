
import React from 'react';
import ChevronLeftSvg from '../icons/chevron-left.svg';

const ChevronLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronLeftSvg {...props} ref={ref} />);
});

ChevronLeft.displayName = 'ChevronLeft';

export default ChevronLeft;

// export default () => <ChevronLeft />;
        