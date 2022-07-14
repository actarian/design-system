
import React from 'react';
import BellOff from '../icons/bell-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellOff {...props} ref={ref} />);
});

// export default () => <BellOff />;
        