
import React from 'react';
import Monitor from '../icons/monitor.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Monitor {...props} ref={ref} />);
});

// export default () => <Monitor />;
        