
import React from 'react';
import TrendingDown from '../icons/trending-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrendingDown {...props} ref={ref} />);
});

// export default () => <TrendingDown />;
        