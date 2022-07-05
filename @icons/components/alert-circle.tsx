
import React from 'react';
import AlertCircle from '../icons/alert-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertCircle {...props} ref={ref} />);
});

// export default () => <AlertCircle />;
        