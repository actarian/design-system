
import React from 'react';
import ArrowRightCircle from '../icons/arrow-right-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRightCircle {...props} ref={ref} />);
});

// export default () => <ArrowRightCircle />;
        