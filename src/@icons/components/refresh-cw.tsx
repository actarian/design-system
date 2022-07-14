
import React from 'react';
import RefreshCw from '../icons/refresh-cw.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefreshCw {...props} ref={ref} />);
});

// export default () => <RefreshCw />;
        