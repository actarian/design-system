
import React from 'react';
import Battery from '../icons/battery.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Battery {...props} ref={ref} />);
});

// export default () => <Battery />;
        