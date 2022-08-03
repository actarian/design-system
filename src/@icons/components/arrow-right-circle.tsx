
import React from 'react';
import ArrowRightCircleSvg from '../icons/arrow-right-circle.svg';

const ArrowRightCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRightCircleSvg {...props} ref={ref} />);
});

ArrowRightCircle.displayName = 'ArrowRightCircle';

export default ArrowRightCircle;

// export default () => <ArrowRightCircle />;
        