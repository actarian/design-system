
import React from 'react';
import PieChart from '../icons/pie-chart.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PieChart {...props} ref={ref} />);
});

// export default () => <PieChart />;
        