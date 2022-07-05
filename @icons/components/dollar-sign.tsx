
import React from 'react';
import DollarSign from '../icons/dollar-sign.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DollarSign {...props} ref={ref} />);
});

// export default () => <DollarSign />;
        