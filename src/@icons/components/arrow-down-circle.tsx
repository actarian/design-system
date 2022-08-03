
import React from 'react';
import ArrowDownCircleSvg from '../icons/arrow-down-circle.svg';

const ArrowDownCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownCircleSvg {...props} ref={ref} />);
});

ArrowDownCircle.displayName = 'ArrowDownCircle';

export default ArrowDownCircle;

// export default () => <ArrowDownCircle />;
        