
import React from 'react';
import BarChart2 from '../icons/bar-chart-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChart2 {...props} ref={ref} />);
});

// export default () => <BarChart2 />;
        