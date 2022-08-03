
import React from 'react';
import ArrowLeftSvg from '../icons/arrow-left.svg';

const ArrowLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeftSvg {...props} ref={ref} />);
});

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;

// export default () => <ArrowLeft />;
        