
import React from 'react';
import ArrowDownRightSvg from '../icons/arrow-down-right.svg';

const ArrowDownRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownRightSvg {...props} ref={ref} />);
});

ArrowDownRight.displayName = 'ArrowDownRight';

export default ArrowDownRight;

// export default () => <ArrowDownRight />;
        