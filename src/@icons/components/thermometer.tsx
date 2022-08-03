
import React from 'react';
import ThermometerSvg from '../icons/thermometer.svg';

const Thermometer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThermometerSvg {...props} ref={ref} />);
});

Thermometer.displayName = 'Thermometer';

export default Thermometer;

// export default () => <Thermometer />;
        