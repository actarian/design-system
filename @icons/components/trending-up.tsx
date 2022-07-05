
import React from 'react';
import TrendingUp from '../icons/trending-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrendingUp {...props} ref={ref} />);
});

// export default () => <TrendingUp />;
        