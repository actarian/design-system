
import React from 'react';
import Thermometer from '../icons/thermometer.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Thermometer {...props} ref={ref} />);
});

// export default () => <Thermometer />;
        