
import React from 'react';
import ArrowRightSvg from '../icons/arrow-right.svg';

const ArrowRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRightSvg {...props} ref={ref} />);
});

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;

// export default () => <ArrowRight />;
        