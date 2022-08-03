
import React from 'react';
import PieChartSvg from '../icons/pie-chart.svg';

const PieChart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PieChartSvg {...props} ref={ref} />);
});

PieChart.displayName = 'PieChart';

export default PieChart;

// export default () => <PieChart />;
        