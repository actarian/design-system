
import React from 'react';
import PercentSvg from '../icons/percent.svg';

const Percent = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PercentSvg {...props} ref={ref} />);
});

Percent.displayName = 'Percent';

export default Percent;

// export default () => <Percent />;
        