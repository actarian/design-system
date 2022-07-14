
import React from 'react';
import ArrowLeftCircle from '../icons/arrow-left-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeftCircle {...props} ref={ref} />);
});

// export default () => <ArrowLeftCircle />;
        