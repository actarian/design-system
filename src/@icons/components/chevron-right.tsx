
import React from 'react';
import ChevronRightSvg from '../icons/chevron-right.svg';

const ChevronRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronRightSvg {...props} ref={ref} />);
});

ChevronRight.displayName = 'ChevronRight';

export default ChevronRight;

// export default () => <ChevronRight />;
        