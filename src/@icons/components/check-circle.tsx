
import React from 'react';
import CheckCircle from '../icons/check-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckCircle {...props} ref={ref} />);
});

// export default () => <CheckCircle />;
        