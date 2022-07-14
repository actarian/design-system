
import React from 'react';
import Truck from '../icons/truck.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Truck {...props} ref={ref} />);
});

// export default () => <Truck />;
        