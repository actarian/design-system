
import React from 'react';
import RefreshCcwSvg from '../icons/refresh-ccw.svg';

const RefreshCcw = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RefreshCcwSvg {...props} ref={ref} />);
});

RefreshCcw.displayName = 'RefreshCcw';

export default RefreshCcw;

// export default () => <RefreshCcw />;
        