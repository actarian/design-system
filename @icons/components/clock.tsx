
import React from 'react';
import Clock from '../icons/clock.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clock {...props} ref={ref} />);
});

// export default () => <Clock />;
        