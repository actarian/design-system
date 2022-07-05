
import React from 'react';
import BarChart from '../icons/bar-chart.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChart {...props} ref={ref} />);
});

// export default () => <BarChart />;
        