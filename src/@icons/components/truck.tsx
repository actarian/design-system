
import React from 'react';
import TruckSvg from '../icons/truck.svg';

const Truck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TruckSvg {...props} ref={ref} />);
});

Truck.displayName = 'Truck';

export default Truck;

// export default () => <Truck />;
        