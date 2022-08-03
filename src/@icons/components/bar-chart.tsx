
import React from 'react';
import BarChartSvg from '../icons/bar-chart.svg';

const BarChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BarChartSvg {...props} ref={ref} />);
});

BarChart.displayName = 'BarChart';

export default BarChart;

// export default () => <BarChart />;
        