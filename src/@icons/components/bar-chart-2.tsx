
import React from 'react';
import BarChart2Svg from '../icons/bar-chart-2.svg';

const BarChart2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChart2Svg {...props} ref={ref} />);
});

BarChart2.displayName = 'BarChart2';

export default BarChart2;

// export default () => <BarChart2 />;
        