
import React from 'react';
import RefreshCcw from '../icons/refresh-ccw.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefreshCcw {...props} ref={ref} />);
});

// export default () => <RefreshCcw />;
        