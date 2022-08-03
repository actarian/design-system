
import React from 'react';
import ArrowUpCircleSvg from '../icons/arrow-up-circle.svg';

const ArrowUpCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpCircleSvg {...props} ref={ref} />);
});

ArrowUpCircle.displayName = 'ArrowUpCircle';

export default ArrowUpCircle;

// export default () => <ArrowUpCircle />;
        