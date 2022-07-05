
import React from 'react';
import ArrowUpCircle from '../icons/arrow-up-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpCircle {...props} ref={ref} />);
});

// export default () => <ArrowUpCircle />;
        