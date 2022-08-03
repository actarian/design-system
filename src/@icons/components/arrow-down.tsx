
import React from 'react';
import ArrowDownSvg from '../icons/arrow-down.svg';

const ArrowDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownSvg {...props} ref={ref} />);
});

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;

// export default () => <ArrowDown />;
        