
import React from 'react';
import MaximizeSvg from '../icons/maximize.svg';

const Maximize = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MaximizeSvg {...props} ref={ref} />);
});

Maximize.displayName = 'Maximize';

export default Maximize;

// export default () => <Maximize />;
        