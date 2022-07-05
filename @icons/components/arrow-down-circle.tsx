
import React from 'react';
import ArrowDownCircle from '../icons/arrow-down-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownCircle {...props} ref={ref} />);
});

// export default () => <ArrowDownCircle />;
        