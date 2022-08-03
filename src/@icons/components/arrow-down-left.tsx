
import React from 'react';
import ArrowDownLeftSvg from '../icons/arrow-down-left.svg';

const ArrowDownLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownLeftSvg {...props} ref={ref} />);
});

ArrowDownLeft.displayName = 'ArrowDownLeft';

export default ArrowDownLeft;

// export default () => <ArrowDownLeft />;
        