
import React from 'react';
import RefreshCwSvg from '../icons/refresh-cw.svg';

const RefreshCw = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefreshCwSvg {...props} ref={ref} />);
});

RefreshCw.displayName = 'RefreshCw';

export default RefreshCw;

// export default () => <RefreshCw />;
        